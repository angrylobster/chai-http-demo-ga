const { QUERIES } = require('../../constants');
const { db } = require('../../db');

async function findAll() {
    const result = await db.query(QUERIES.USERS.FIND_ALL);
    return result.rows;
}

async function insert(username = '', email = '', password = '') {
    const result = await db.query(QUERIES.USERS.INSERT, [
        username,
        email,
        password
    ]);
    return result.rows;
}

module.exports = {
    end: db.end,
    findAll,
    insert
};
