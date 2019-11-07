const Joi = require('joi');
const UserModel = require('../models/user');
const schema = require('../controllers/validations/userValidation');

const create = async (ctx, next, User = UserModel) => {
  const { email } = ctx.request.body;
  const { error } = Joi.validate(ctx.request.body.user, schema.userValidateSchema);
  if (error) {
    return ctx.erro(error.message, 422, 'Não Válido');
  }
  const bUser = await UserModel.findOne({ email }).exec();
  if (bUser) {
    return ctx.erro('Usuário já cadastrado no sistema!', 400, 'Usuário existente');
  }
  const user = await User.create(ctx.request.body.user);
  return ctx.finish(user, 200);
};

module.exports = {
  store: (ctx, next) => create(ctx, next, UserModel),
};
