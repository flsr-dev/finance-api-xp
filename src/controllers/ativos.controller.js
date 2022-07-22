const { StatusCodes } = require('http-status-codes');
const { getAssetById } = require('../services/ativos.services');
const { ASSET_NOT_FOUND_MSG } = require('../utils/errorMessages');

const getAsset = async (req, res) => {
  const asset = await getAssetById(req.params);
  if (!asset) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: ASSET_NOT_FOUND_MSG });
  }
  return res.status(StatusCodes.OK).json(asset);
};

module.exports = {
  getAsset,
};
