const { StatusCodes } = require('http-status-codes');
const errorMessages = require('../utils/errorMessages');

const httpErrorMiddleware = (err, _req, res, _next) => {
  const { status, message } = err;
  if (status) {
    return res.status(status).json({ message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(errorMessages.INTERNAL_ERROR_MSG);
};

module.exports = httpErrorMiddleware;
