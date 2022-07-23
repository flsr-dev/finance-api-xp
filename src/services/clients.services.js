const { StatusCodes } = require('http-status-codes');
const HttpException = require('../classes/http.exception');
const { AtivosClientes, Clientes } = require('../database/models');
const { CLIENT_NOT_FOUND_MSG, ASSET_NOT_ENOUGH_MSG } = require('../utils/errorMessages');

const checkIfClientExists = async (codCliente) => {
  const isClientRegistered = await Clientes.findOne({ where: { codCliente } });
  if (!isClientRegistered) {
    throw new HttpException(StatusCodes.NOT_FOUND, CLIENT_NOT_FOUND_MSG);
  }
  return true;
};

const getAssetsByClient = async ({ codCliente }) => {
  checkIfClientExists(codCliente);
  return AtivosClientes.findAll({ where: { codCliente } });
};

const checkClientAssetAvailability = {
  comprar: (body, asset) => {
    const { qtdeAtivo: requestedAmount } = body;
    const { qtdeAtivo: brokerAmount } = asset;
    if (requestedAmount > brokerAmount) {
      throw new HttpException(StatusCodes.UNPROCESSABLE_ENTITY, ASSET_NOT_ENOUGH_MSG);
    }
  },
  vender: async (body) => {
    const { qtdeAtivo: requestedAmount } = body;
    const { qtdeAtivo } = await AtivosClientes.findOne({
      where: {
        codCliente: body.codCliente,
        codAtivo: body.codAtivo,
      },
    });
    if (requestedAmount > qtdeAtivo) {
      throw new HttpException(StatusCodes.UNPROCESSABLE_ENTITY, ASSET_NOT_ENOUGH_MSG);
    }
  },
};

const isAssetEnough = async (body, asset, operationType) => {
  await checkClientAssetAvailability[operationType](body, asset);
  return true;
};

module.exports = {
  getAssetsByClient,
  checkIfClientExists,
  isAssetEnough,
};
