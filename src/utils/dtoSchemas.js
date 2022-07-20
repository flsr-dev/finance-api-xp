const Joi = require('joi');

const investimentsObjectSchema = Joi
  .object(
    {
      codCliente: Joi.number().required(),
      codAtivo: Joi.number().required(),
      qtdeAtivo: Joi.number().required().min(1),
    },
  ).messages({
    'any.required': '{{#label}} is required',
    'number.min': '{{#label}} must be greater than or equal to {{#limit}}',
  });

const accountObjectSchema = Joi
  .object({
    codCliente: Joi.number().required(),
    valor: Joi.number().required().greater(0).precision(2),
  }).messages({
    'any.required': '{{#label}} is required',
    'number.greater': '{{#label}} must be greater than {{#limit}}',
    'number.precision': '{{#label}} must have 2 decimal places',
  });

module.exports = {

  investimentosComprar: investimentsObjectSchema,
  investimentosVender: investimentsObjectSchema,
  contaDeposito: accountObjectSchema,
  contaSaque: accountObjectSchema,

  clientesAtivos: Joi.object({
    codCliente: Joi.number().required(),
  }).messages({
    'any.required': '{{#label}} is required',
  }),

  assetsAtivos: Joi.object({
    codAtivo: Joi.number().required(),
  }).messages({
    'any.required': '{{#label}} is required',
  }),

};
