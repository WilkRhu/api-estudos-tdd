const Joi = require('joi');
const UserModel = require('../models/user');
const schema = require('../controllers/validations/userValidation');

const create = async (ctx, next, User = UserModel) => {
  const { email, password } = ctx.request.body;
  try {
    await Joi.validateAsync(ctx.request.body, schema.userValidateSchema);

    if (!email || !password) {
      return ctx.status(400).body('Requisição Incompleta!');
    }
    const bUser = await UserModel.findOne({ email }).exec();
    if (bUser) {
      return ctx.erro('Usuário já cadastrado no sistema!', 400, 'Usuário existente');
    }
    const user = await User.create(ctx.request.body);
    return ctx.finish(user, 200);
  } catch (err) {
    return ctx.erro(err, 400, 'Erro ao cadastrar o usuário!');
  }
};

module.exports = {
  create,
};
