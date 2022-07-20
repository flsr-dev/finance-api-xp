const Sequelize = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { accountBalanceOperation } = require('../services/contas.services');
const { INTERNAL_ERROR_MSG } = require('../utils/errorMessages');
const config = require('../database/config/config');
const toCamelCase = require('../utils/convertToCamelCase');
const { checkIfClientIsAuthorized } = require('../utils/checkClientAuthorization');

const sequelize = new Sequelize(config.production);

const operateAccountBalance = async (req, res) => {
  checkIfClientIsAuthorized(req.body.codCliente, req.user.id);
  const operationType = toCamelCase(req.path);
  const client = await sequelize.transaction(async (t) => (
    accountBalanceOperation(req.body, operationType, t)
  ));
  if (client) {
    return res.status(StatusCodes.OK).json(client);
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: INTERNAL_ERROR_MSG });
};

module.exports = { operateAccountBalance };
