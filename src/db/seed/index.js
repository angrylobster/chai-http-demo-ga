const { db } = require('..');
const { QUERIES } = require('../../constants');
const { users } = require('./data');
const config = require('../../config');

(async () => {
    await db.query(QUERIES.USERS.DROP_TABLE_IF_EXISTS);
    await db.query(QUERIES.USERS.CREATE_TABLE);
    await Promise.all(
        users.map(user => {
            const { username, email, password } = user;
            return db.query(QUERIES.USERS.INSERT, [username, email, password]);
        })
    );
    await db.end();
    console.log(`Successfully seeded ${config.db.database}!`);
})();
