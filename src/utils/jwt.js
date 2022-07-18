const Jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const HttpException = require('../classes/http.exception');
const { AUTHENTICATION_ERROR_MSG } = require('./errorMessages');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  // expiresIn: '15m',
  algorithm: 'HS256',
};

const createToken = (payload) => Jwt.sign(payload, JWT_SECRET, jwtConfig);

const authenticateToken = (token) => {
  if (!token) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, AUTHENTICATION_ERROR_MSG);
  }

  try {
    const authenticate = Jwt.verify(token, JWT_SECRET);
    return authenticate;
  } catch (error) {
    throw new HttpException(StatusCodes.UNAUTHORIZED, AUTHENTICATION_ERROR_MSG);
  }
};

module.exports = {
  createToken,
  authenticateToken,
};
