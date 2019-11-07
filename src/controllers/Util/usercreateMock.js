const faker = require('faker');
const RandExp = require('randexp');

const user = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  cpf: new RandExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/).gen(),
  rg: new RandExp(/^[0-9]{7}$/).gen(),
};

const UserModelMock = () => {
  const createUser = {
    create: () => new Promise((resolve) => {
      setTimeout(
        resolve({
          user,
        }),
        100,
      );
    }),
  };

  return {
    create: () => ({ ...createUser }),
  };
};


module.exports = UserModelMock;
