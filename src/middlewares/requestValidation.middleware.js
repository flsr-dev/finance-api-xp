const HttpException = require('../classes/http.exception');
const toCamelCase = require('../utils/convertToCamelCase');
const dtoSchemas = require('../utils/dtoSchemas');
const joiErrorStatus = require('../utils/joiErrorStatus');

const requestValidation = (req, _res, next) => {
  const routeName = toCamelCase(req.originalUrl);
  const { error } = dtoSchemas[routeName].validate(req.body);
  if (!error) {
    return next();
  }
  const { message, type } = error.details[0];
  throw new HttpException(joiErrorStatus[type], message);
};

module.exports = requestValidation;
