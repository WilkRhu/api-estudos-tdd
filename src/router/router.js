const Router = require('koa-router');
const router = new Router();

router.get('/', async(ctx)=>{
    ctx.body = "Teste de Rota"
});

module.exports = router;