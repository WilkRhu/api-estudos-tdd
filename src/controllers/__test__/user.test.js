const request = require('supertest');
const faker = require('faker');
const RandExp = require('randexp');
const app = require('../../../app');
const truncate = require('../Util/truncate');

let user;
describe('Teste de usuários', () => {
  beforeAll(async () => {
    await truncate.user();
  });
  afterAll(async () => {
    await truncate.user();
  });
  beforeEach(() => {
    user = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      cpf: new RandExp(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/).gen(),
      rg: new RandExp(/^[0-9]{7}$/).gen(),

    };
  });
  it('Deve Criar um usuário com sucesso', async () => {
    const response = await request(app.callback())
      .post('/user')
      .send({
        user,
      });
    expect(response.body.name).toBe(user.name);
  });
});
