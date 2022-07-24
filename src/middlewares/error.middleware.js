const { StatusCodes } = require('http-status-codes');
const { INTERNAL_ERROR_MSG } = require('../utils/errorMessages');

const httpErrorMiddleware = (err, _req, res, _next) => {
  const { status } = err;
  if (status) {
    return res.status(status).json({ message: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: INTERNAL_ERROR_MSG });
};

module.exports = httpErrorMiddleware;
