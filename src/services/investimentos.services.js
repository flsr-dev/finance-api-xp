const { StatusCodes } = require('http-status-codes');
const { Ativos, Transacoes, AtivosClientes } = require('../database/models');
const HttpException = require('../classes/http.exception');
const { ASSET_NOT_FOUND_MSG } = require('../utils/errorMessages');
const { isAssetEnough } = require('./clients.services');
const { calcBrokerAmount, calcUserAmount } = require('../utils/calculateAssetAmount');
const transactionCodes = require('../utils/transactionCodes');
const { updateBalance } = require('./contas.services');
const { calcOperationValue } = require('../utils/calcOperationValue');

const getAsset = async (codAtivo) => {
  const brokerAssetData = await Ativos.findByPk(codAtivo);
  if (!brokerAssetData) {
    throw new HttpException(StatusCodes.NOT_FOUND, ASSET_NOT_FOUND_MSG);
  }
  return brokerAssetData;
};

const createBuyTransaction = async (
  requestedAsset,
  brokerAssetData,
  operationType,
  transaction,
) => {
  const codTipoTransacao = transactionCodes[operationType];
  const { codCliente, codAtivo, qtdeAtivo } = requestedAsset;
  const { valor } = brokerAssetData;

  return Transacoes.create(
    {
      codCliente,
      codTipoTransacao,
      codAtivo,
      valor,
      qtdeAtivo,
    },
    { transaction },
  );
};

const updateOrCreateClientAsset = async (
  requestedAsset,
  brokerAssetData,
  operationType,
  transaction,
) => {
  const { codCliente, codAtivo, qtdeAtivo } = requestedAsset;
  const { valor } = brokerAssetData;

  const clientAsset = await AtivosClientes.findOne(
    {
      where: { codCliente, codAtivo },
      transaction,
    },
  );

  if (clientAsset) {
    clientAsset.qtdeAtivo = calcUserAmount(clientAsset, qtdeAtivo, operationType);
    clientAsset.valor = valor;
    return clientAsset.save({ transaction });
  }
  return AtivosClientes.create(
    {
      codCliente, codAtivo, valor, qtdeAtivo,
    },
    { transaction },
  );
};

const updateAccountBalance = async (assetData, requestData, operationType, seqTransaction) => {
  const { codCliente } = requestData;
  const valor = calcOperationValue(assetData, requestData);
  if (operationType === 'comprar') {
    return updateBalance(codCliente, valor, 'saque', seqTransaction);
  }
  return updateBalance(codCliente, valor, 'deposito', seqTransaction);
};

const operateAsset = async (body, operationType, seqTransaction) => {
  const { codAtivo } = body;
  const brokerAssetData = await getAsset(codAtivo);
  const isAssetAvailable = await isAssetEnough(body, brokerAssetData, operationType);

  if (isAssetAvailable) {
    await updateAccountBalance(brokerAssetData, body, operationType, seqTransaction);
    brokerAssetData.qtdeAtivo = calcBrokerAmount(brokerAssetData, body, operationType);
    brokerAssetData.save({ transaction: seqTransaction });
    await updateOrCreateClientAsset(body, brokerAssetData, operationType, seqTransaction);
    return createBuyTransaction(body, brokerAssetData, operationType, seqTransaction);
  }
  return false;
};

module.exports = {
  operateAsset,
};
