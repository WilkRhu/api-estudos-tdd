/* eslint-disable import/no-unresolved */
const userCreateSuccess = require('./userCreateSuccess.json');

const create = () => (new Promise((resolve) => {
  setTimeout(resolve(
    userCreateSuccess,
  ), 100);
}));

module.exports = {
  create: () => ({ create }),
};
