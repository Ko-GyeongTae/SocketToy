const Koa = require('koa');
const Logger = require('koa-logger');
const Socket = require('socket.io');
const { addUser } = require('./api/users');
const router = require('./router');

const app = new Koa();
const io = Socket(app);

app.use(Logger());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(2600, () => {
    console.log("✅Server is running on port : 2600");
});

io.on("connection", (Socket) => {
    console.log("Connected Socket!");
    console.log(Socket);

    //join Request
    Socket.on("join", ({ name, room }, callback) => {
        console.log(name, room);
        console.log(socket.id, "socketid");

        const { error, user } = addUser();
    });
});