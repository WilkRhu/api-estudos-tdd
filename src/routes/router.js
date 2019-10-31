const Router = require('koa-router');

const router = new Router();
const UserController = require('../controllers/userController');

router.post('/user', UserController.create);

module.exports = router;
