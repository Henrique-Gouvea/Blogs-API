const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi
      .email()
      .required()
      .message({
        'any-required': 'Some required fields are missing',
      }),

    password: Joi
      .string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
      .required()
      .message({
        'any-required': 'Some required fields are missing',
      }),
});

module.exports = loginSchema;