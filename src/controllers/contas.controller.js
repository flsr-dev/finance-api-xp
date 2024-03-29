const Sequelize = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { accountBalanceOperation, getClientAccountBalance } = require('../services/contas.services');
const { INTERNAL_ERROR_MSG, CLIENT_NOT_FOUND_MSG } = require('../utils/errorMessages');
const config = require('../database/config/config');
const toCamelCase = require('../utils/convertToCamelCase');

const sequelize = new Sequelize(config.production);

const operateAccountBalance = async (req, res) => {
  const operationType = toCamelCase(req.path);
  const client = await sequelize.transaction(async (t) => (
    accountBalanceOperation(req.body, operationType, t)
  ));
  if (client) {
    return res.status(StatusCodes.OK).json(client);
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: INTERNAL_ERROR_MSG });
};

const getClientBalance = async (req, res) => {
  const accountBalance = await getClientAccountBalance(req.params);
  if (!accountBalance) {
    return res.status(StatusCodes.NOT_FOUND).json({ message: CLIENT_NOT_FOUND_MSG });
  }
  return res.status(StatusCodes.OK).json(accountBalance);
};

module.exports = {
  operateAccountBalance,
  getClientBalance,
};
