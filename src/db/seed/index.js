const { db } = require('..');
const { QUERIES } = require('../../constants');
const { users } = require('./seedData');
const { config } = require('../../config');

(async () => {
    await db.query(QUERIES.USERS.DROP_TABLE_IF_EXISTS);
    await db.query(QUERIES.USERS.CREATE_TABLE);
    users.forEach(async user => {
        const { username, email, password } = user;
        await db.query(QUERIES.USERS.INSERT, [username, email, password]);
    });
    console.log(`Successfully seeded ${config.db.database}!`);
})();
