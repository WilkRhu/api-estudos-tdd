require('dotenv').config({
  path: process.env.NODE_ENV == 'test' ? '.env.test' : '.env',
});
require('./src/conect/index');
const Koa = require('koa');
const bodyparser = require('koa-body-parser');
const json = require('koa-json');
const middleware = require('./src/middleware/index');
const router = require('./src/routes/router');

const app = new Koa();
app.use(bodyparser());
app.use(middleware);
app.use(router.routes());
app.use(json());


app.listen(process.env.PORT || 3001, () => {
  console.log('Rodando na porta 3001!');
});
