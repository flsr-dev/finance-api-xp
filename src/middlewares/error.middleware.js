const { StatusCodes } = require('http-status-codes');
const errorMessages = require('../utils/errorMessages');

const httpErrorMiddleware = (err, _req, res, _next) => {
  const { status } = err;
  if (status) {
    return res.status(status).json({ message: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: errorMessages.INTERNAL_SERVER_ERROR });
};

module.exports = httpErrorMiddleware;
