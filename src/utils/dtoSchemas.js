const Joi = require('joi');

module.exports = {
  investimentosComprar: Joi
    .object(
      {
        codCliente: Joi.number().required(),
        codAtivo: Joi.number().required(),
        qtdeAtivo: Joi.number().required().min(1),
      },
    )
    .messages({
      'any.required': '{{#label}} is required',
      'number.min': '{{#label}} must be greater than or equal to 1',
    }),
};
