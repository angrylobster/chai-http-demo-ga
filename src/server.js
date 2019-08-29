const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const config = require('./config');
const { dropConnection } = require('./controllers');
const { userRouter } = require('./routers');

server.use(bodyParser.json());
server.use('/users', userRouter);

if (process.env.NODE_ENV !== 'test') {
    server.listen(config.server.port, () =>
        console.log(`=== SERVER IS LISTENING ON PORT ${config.server.port} ===`)
    );
}

module.exports = {
    server,
    dropConnection
};
