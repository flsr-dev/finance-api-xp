const { StatusCodes } = require('http-status-codes');
const HttpException = require('../classes/http.exception');
const { AtivosClientes, Clientes } = require('../database/models');
const { checkIfClientIsAuthorized } = require('../utils/checkClientAuthorization');
const { CLIENT_NOT_FOUND_MSG } = require('../utils/errorMessages');

const checkIfClientExists = async (codCliente) => {
  const isClientRegistered = await Clientes.findOne({ where: { codCliente } });
  if (!isClientRegistered) {
    throw new HttpException(StatusCodes.NOT_FOUND, CLIENT_NOT_FOUND_MSG);
  }
  return true;
};

const getAssetsByClient = async ({ codCliente }, { id: userCode }) => {
  checkIfClientIsAuthorized(codCliente, userCode);
  checkIfClientExists(codCliente);

  return AtivosClientes.findAll({ where: { codCliente } });
};

module.exports = {
  getAssetsByClient,
  checkIfClientExists,
};
