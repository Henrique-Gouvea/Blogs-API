const Joi = require('joi');

const userSchema = Joi.object({
  displayName: Joi
    .string()
    .required()
    .min(8)
    .messages({
      'string.min': '"displayName" length must be at least 8 characters long',
      'any.required': '"displayName" is required',
    }),
    email: Joi
    .string()
    .email()
    .messages({
      'string.email': '"email" must be a valid email',
      'any.required': '"email" is required',
    }),
    password: Joi
    .string()
    .min(6)
    .required()
    .messages({
      'string.min': '"password" length must be at least 6 characters long',
      'any.required': '"password" is required',
    }),
}).required();

module.exports = userSchema;