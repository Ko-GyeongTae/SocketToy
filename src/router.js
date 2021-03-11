const Router = require('koa-router');

const router = new Router();

router.get("/runtest", (ctx, next) => {
    ctx.body = "Chat Server is running";
});

module.exports = router;