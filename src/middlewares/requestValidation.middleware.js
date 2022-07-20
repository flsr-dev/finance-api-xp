const HttpException = require('../classes/http.exception');
const toCamelCase = require('../utils/convertToCamelCase');
const dtoSchemas = require('../utils/dtoSchemas');
const joiErrorStatus = require('../utils/joiErrorStatus');

const validateSchema = (req) => {
  const routeName = toCamelCase(req.originalUrl);
  if (Object.keys(req.body).length === 0) {
    return dtoSchemas[routeName].validate(req.params);
  }
  return dtoSchemas[routeName].validate(req.body);
};

const requestValidation = (req, _res, next) => {
  const { error } = validateSchema(req);
  if (!error) {
    return next();
  }
  const { message, type } = error.details[0];
  throw new HttpException(joiErrorStatus[type], message);
};

module.exports = requestValidation;
