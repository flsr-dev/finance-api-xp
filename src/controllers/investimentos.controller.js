const { StatusCodes } = require('http-status-codes');
const Sequelize = require('sequelize');
const InvestimentosServices = require('../services/investimentos.services');
const { ASSET_NOT_FOUND_MSG } = require('../utils/errorMessages');
const convertToCamelCase = require('../utils/convertToCamelCase');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.production);

const operateAsset = async (req, res) => {
  const operationType = convertToCamelCase(req.path);
  const assets = await sequelize.transaction(async (t) => (
    InvestimentosServices.operateAsset(req.body, operationType, t)
  ));
  if (!assets) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: ASSET_NOT_FOUND_MSG });
  }
  return res.status(StatusCodes.OK).json(assets);
};

module.exports = {
  operateAsset,
};
