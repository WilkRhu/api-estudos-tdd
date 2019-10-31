const UserModel = require('../models/user');

const create = async (ctx, next, User = UserModel) => {
  const { email, password } = ctx.request.body;
  try {
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
