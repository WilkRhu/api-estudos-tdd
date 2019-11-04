const Joi = require('joi');

const userValidateSchema = Joi.object().keys({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email({ minDomainAtoms: 2 }),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  cpf: Joi.string().max(11).required(),
  rg: Joi.string().max(7).required(),
});

module.exports = {
  userValidateSchema,
};
