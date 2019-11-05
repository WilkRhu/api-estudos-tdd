const Joi = require('joi');


const userValidateSchema = Joi.object().keys({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),

  email: Joi.string()
    .required()
    .email({ minDomainAtoms: 2 }),

  password: Joi.string()
    .required()
    .regex(/^[a-zA-Z0-9\w{@ # $ % ¨ & * }]{3,30}$/),

  cpf: Joi.string()
    .regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
    .min(1)
    .max(14)
    .required(),


  rg: Joi.string()
    .min(0)
    .max(7)
    .required(),
});

module.exports = {
  userValidateSchema,
};
