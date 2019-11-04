const UserModel = require('../models/user');

const create = async (ctx, next, User = UserModel) => {
  const { email, password } = ctx.request.body;
  try {
    if (!email || !password) {
      return ctx.status(400).body('Requisição Incompleta!');
    }
    const user = await User.create(ctx.body);
    ctx.body = user;
    return ctx.body;
  } catch (err) {
    return ctx.err;
  }
};

module.exports = {
  create,
};
