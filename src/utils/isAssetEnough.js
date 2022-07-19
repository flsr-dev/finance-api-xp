const { StatusCodes } = require('http-status-codes');
const HttpException = require('../classes/http.exception');
const { ASSET_NOT_ENOUGH_MSG } = require('./errorMessages');

const isAssetEnough = (body, asset) => {
  const { qtdeAtivo: requestedAmount } = body;
  const { qtdeAtivo: brokerAmount } = asset;

  if (requestedAmount > brokerAmount) {
    throw new HttpException(StatusCodes.UNPROCESSABLE_ENTITY, ASSET_NOT_ENOUGH_MSG);
  }

  return true;
};

module.exports = isAssetEnough;
