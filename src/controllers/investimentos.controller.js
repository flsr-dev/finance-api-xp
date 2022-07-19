const { StatusCodes } = require('http-status-codes');
const InvestimentosServices = require('../services/investimentos.services');
const { ASSET_NOT_FOUND_MSG } = require('../utils/errorMessages');

const buyAsset = async (req, res) => {
  const assets = await InvestimentosServices.buyAsset(req.body);
  if (!assets) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: ASSET_NOT_FOUND_MSG });
  }
  return res.status(StatusCodes.OK).json(assets);
};

const sellAsset = async (req, res) => {
  const assets = await InvestimentosServices.sellAsset(req.body);
  if (!assets) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: ASSET_NOT_FOUND_MSG });
  }
  return res.status(StatusCodes.OK).json(assets);
};

module.exports = {
  buyAsset,
  sellAsset,
};
