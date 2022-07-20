const { StatusCodes } = require('http-status-codes');
const HttpException = require('../classes/http.exception');
const { FORBIDDEN_MSG } = require('./errorMessages');

const checkIfClientIsAuthorized = (codCliente, userCode) => {
  if (+codCliente === userCode) {
    return true;
  }
  throw new HttpException(StatusCodes.FORBIDDEN, FORBIDDEN_MSG);
};

module.exports = { checkIfClientIsAuthorized };
