const Joi = require('joi');

const ERROR_MESSAGE = 'Some required fields are missing';

const postSchema = Joi.object({
  title: Joi
    .string()
    .min(1)
    .required()
    .messages({
      'string.empty': ERROR_MESSAGE,
      'any.required': ERROR_MESSAGE,
    }),
    content: Joi
    .string()
    .messages({
      'string.empty': ERROR_MESSAGE,
      'any.required': ERROR_MESSAGE,
    }),
    // categoryIds: Joi
    // .array()
    // .required()
    // .messages({
    //   'any.required': ERROR_MESSAGE,
    // }),
}).required();

module.exports = postSchema;