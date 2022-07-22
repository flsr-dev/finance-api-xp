const { StatusCodes } = require('http-status-codes');
const { Ativos, Transacoes, AtivosClientes } = require('../database/models');
const HttpException = require('../classes/http.exception');
const { ASSET_NOT_FOUND_MSG } = require('../utils/errorMessages');
const { isAssetEnough } = require('../utils/isAssetEnough');
const { calcBrokerAmount, calcUserAmount } = require('../utils/calculateAssetAmount');
const transactionCodes = require('../utils/transactionCodes');

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
    const { qtdeAtivo: oldAssetAmount } = clientAsset;
    const newAssetAmount = calcUserAmount(oldAssetAmount, qtdeAtivo, operationType);
    const updateObject = { qtdeAtivo: newAssetAmount, valor };
    const optionsObject = { where: { codCliente, codAtivo }, transaction };
    return AtivosClientes.update(updateObject, optionsObject);
  }
  return AtivosClientes.create(
    {
      codCliente, codAtivo, valor, qtdeAtivo,
    },
    { transaction },
  );
};

const operateAsset = async (body, operationType, seqTransaction) => {
  const { codAtivo } = body;

  const brokerAssetData = await Ativos.findByPk(body.codAtivo);
  if (!brokerAssetData) {
    throw new HttpException(StatusCodes.NOT_FOUND, ASSET_NOT_FOUND_MSG);
  }
  const isAssetAvailable = await isAssetEnough(body, brokerAssetData, operationType);

  if (isAssetAvailable) {
    const { qtdeAtivo: brokerStoredAsset } = brokerAssetData;
    const newAssetAmount = calcBrokerAmount(brokerStoredAsset, body.qtdeAtivo, operationType);
    await Ativos.update({ qtdeAtivo: newAssetAmount }, { where: { codAtivo }, transaction: seqTransaction });
    await updateOrCreateClientAsset(body, brokerAssetData, operationType, seqTransaction);
    return createBuyTransaction(body, brokerAssetData, operationType, seqTransaction);
  }
  return false;
};

module.exports = {
  operateAsset,
};
