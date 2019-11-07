const User = require('../../models/userTest');

module.exports = {
  user: async () => {
    await User.remove({});
  },
};
