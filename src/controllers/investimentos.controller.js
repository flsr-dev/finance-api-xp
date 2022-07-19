const { StatusCodes } = require('http-status-codes');
const InvestimentosServices = require('../services/investimentos.services');
const { ASSET_NOT_FOUND_MSG } = require('../utils/errorMessages');
const convertToCamelCase = require('../utils/convertToCamelCase');

const operateAsset = async (req, res) => {
  const operationType = convertToCamelCase(req.path);
  const assets = await InvestimentosServices.operateAsset(req.body, operationType);
  if (!assets) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: ASSET_NOT_FOUND_MSG });
  }
  return res.status(StatusCodes.OK).json(assets);
};

module.exports = {
  operateAsset,
};
