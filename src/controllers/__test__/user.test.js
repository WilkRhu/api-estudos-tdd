const request = require('supertest');
const faker = require('faker');
const RandExp = require('randexp');
const app = require('../../../app');
const truncate = require('../Util/truncate');
const { create } = require('../userController');
const UserModelMock = require('../Util/usercreateMock');

const responseMock = () => ({
  status: (someStatusCode) => ({
    json: (someJsonBody) => ({
      send: () => ({
        status: someStatusCode,
        body: someJsonBody,
      }),
    }),
  }),
});


const user = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  cpf: new RandExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/).gen(),
  rg: new RandExp(/^[0-9]{7}$/).gen(),

};


describe('Teste de usuários', () => {
  it('Deve Criar um usuário com sucesso', async () => {
    const response = await create({ ctx: user }, responseMock(), UserModelMock().create());
    expect(response.status).toBe(200);
  });
});
