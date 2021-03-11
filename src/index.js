const Koa = require('koa');
const Router = require('koa-router');
const Logger = require('koa-logger');
const Socket = require('socket.io');

const app = new Koa();
const router = new Router();
const io = Socket(app);

app.use(Logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(2600, () => {
    console.log("✅Server is running on port : 2600");
});

