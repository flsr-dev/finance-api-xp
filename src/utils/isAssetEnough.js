const { StatusCodes } = require('http-status-codes');
const HttpException = require('../classes/http.exception');
const { ASSET_NOT_ENOUGH_MSG } = require('./errorMessages');
const { AtivosClientes } = require('../database/models');

const checkAssetAvailability = {
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
  await checkAssetAvailability[operationType](body, asset);
  return true;
};

module.exports = { isAssetEnough };
