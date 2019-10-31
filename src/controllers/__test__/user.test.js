const userMoch = require('./userMoch');
const UserController = require('../../controllers/UserController');
const userCreateSuccess = require('./userCreateSuccess.json');


describe('Teste de usuários', () => {
  test('Deve criar usuário corretamente', async () => {
    const ctx = {
      request: {
        body: { userCreateSuccess },
      },
    };
    const response = await UserController.create(ctx, {}, userMoch.create());

    expect(response.name).toBe('Wilk Caetano');
  });
});
