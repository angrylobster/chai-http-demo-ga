const { QUERIES } = require('../../constants');
const { db } = require('../../db');

async function findAll() {
    const result = await db.query(QUERIES.USERS.FIND_ALL);
    return result.rows;
}

module.exports = {
    end: db.end,
    findAll
};
