const Sequelize = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { Ativos, Transacoes, AtivosClientes } = require('../database/models');
const config = require('../database/config/config');
const HttpException = require('../classes/http.exception');
const { ASSET_NOT_FOUND_MSG } = require('../utils/errorMessages');
const isAssetEnough = require('../utils/isAssetEnough');

const sequelize = new Sequelize(config.production);

const createBuyTransaction = async (requestedAsset, brokerAssetData, transaction) => {
  const codTipoTransacao = 1;
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

const updateOrCreateClientAsset = async (requestedAsset, brokerAssetData, transaction) => {
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
    const newAssetAmount = oldAssetAmount + qtdeAtivo;
    return AtivosClientes.update(
      { qtdeAtivo: newAssetAmount, valor },
      {
        where: { codCliente, codAtivo },
        transaction,
      },
    );
  }
  return AtivosClientes.create(
    {
      codCliente, codAtivo, valor, qtdeAtivo,
    },
    { transaction },
  );
};

const buyAsset = async (body) => {
  const { codAtivo } = body;
  return sequelize.transaction(async (t) => {
    const brokerAssetData = await Ativos.findByPk(body.codAtivo);
    if (!brokerAssetData) {
      throw new HttpException(StatusCodes.NOT_FOUND, ASSET_NOT_FOUND_MSG);
    }
    const isAssetAvailable = isAssetEnough(body, brokerAssetData);

    if (isAssetAvailable) {
      const newAssetAmount = brokerAssetData.qtdeAtivo - body.qtdeAtivo;
      const buyTransaction = await createBuyTransaction(body, brokerAssetData, t);
      await Ativos.update({ qtdeAtivo: newAssetAmount }, { where: { codAtivo }, transaction: t });
      await updateOrCreateClientAsset(body, brokerAssetData, t);
      return buyTransaction;
    }
    return false;
  });
};

module.exports = {
  buyAsset,
};
