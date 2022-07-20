const { StatusCodes } = require('http-status-codes');

module.exports = {
  'any.required': StatusCodes.BAD_REQUEST,
  'any.min': StatusCodes.UNPROCESSABLE_ENTITY,
  'array.base': StatusCodes.UNPROCESSABLE_ENTITY,
  'array.min': StatusCodes.UNPROCESSABLE_ENTITY,
  'number.base': StatusCodes.UNPROCESSABLE_ENTITY,
  'number.min': StatusCodes.UNPROCESSABLE_ENTITY,
  'string.base': StatusCodes.UNPROCESSABLE_ENTITY,
  'string.min': StatusCodes.UNPROCESSABLE_ENTITY,
};
