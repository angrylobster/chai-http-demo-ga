const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { dropConnection } = require('./controllers/user');
const DEFAULT_PORT = 3000;
app.use(bodyParser.json());

require('./router')(app);

if (process.env.NODE_ENV !== 'test') {
    app.listen(DEFAULT_PORT, () =>
        console.log(`=== SERVER IS LISTENING ON PORT ${DEFAULT_PORT} ===`)
    );
}

module.exports = {
    app,
    dropConnection
};
