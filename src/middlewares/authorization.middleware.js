const { StatusCodes } = require('http-status-codes');
const HttpException = require('../classes/http.exception');
const { FORBIDDEN_MSG } = require('../utils/errorMessages');

const authorizationMiddleware = (req, _res, next) => {
  const { codCliente: codClienteFromToken } = req.user;
  let codCliente;
  if (req.method === 'POST') {
    codCliente = req.body.codCliente;
  } else {
    codCliente = req.params.codCliente;
  }
  if (+codCliente !== +codClienteFromToken) {
    throw new HttpException(StatusCodes.FORBIDDEN, FORBIDDEN_MSG);
  }
  return next();
};
module.exports = { authorizationMiddleware };
