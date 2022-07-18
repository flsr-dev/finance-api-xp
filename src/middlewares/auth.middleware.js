const { StatusCodes } = require('http-status-codes');
const HttpException = require('../classes/http.exception');
const { AUTHENTICATION_ERROR_MSG } = require('../utils/errorMessages');
const { authenticateToken } = require('../utils/jwt');

const authenticationMiddleware = (req, res, next) => {
  const token = req.headers.authorization;
  const user = authenticateToken(token);
  if (!user) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, AUTHENTICATION_ERROR_MSG);
  }
  res.local.user = user;
  next();
};

module.exports = authenticationMiddleware;
