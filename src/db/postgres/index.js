const { Pool } = require('pg');
const { config } = require('../../config');
const pool = new Pool(config.db);

async function query(queryString = '', params = []) {
    const results = await pool.query(queryString, params);
    return results;
}

async function end() {
    await pool.end();
}

module.exports = {
    end,
    query
};
