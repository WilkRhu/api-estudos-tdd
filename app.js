require('dotenv').config();
const koa = require('koa');
const app = new koa();

const bodyparser = require('koa-body-parser');
const json = require('koa-json');
const router = require('./src/router/router');

app.use(bodyparser());
app.use(router.routes());
app.use(json());


app.listen(process.env.PORT || 3001, () => {
    console.log('Rodando na porta 3001!');
})
