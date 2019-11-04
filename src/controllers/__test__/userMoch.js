/* eslint-disable import/no-unresolved */
const userCreateSuccess = require('./userCreateSuccess.json');
const userCreateError = require('./userCreateError.json');

const create = () => (new Promise((resolve) => {
  setTimeout(resolve(
    userCreateSuccess,
  ), 100);
}));

const createError = () => (new Promise((resolve) => {
  setTimeout(resolve(
    userCreateError,
  ), 100);
}));

module.exports = {
  create: () => ({ create }),
  createError: () => ({ createError }),
};
