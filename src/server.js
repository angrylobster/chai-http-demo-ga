const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const { dropConnection } = require('./controllers');
const config = require('./config');
server.use(bodyParser.json());

require('./router')(server);

if (process.env.NODE_ENV !== 'test') {
    server.listen(config.server.port, () =>
        console.log(`=== SERVER IS LISTENING ON PORT ${config.server.port} ===`)
    );
}

module.exports = {
    server,
    dropConnection
};
