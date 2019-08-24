const { Pool } = require('pg');
const { config } = require('../../config');
const pool = new Pool(config.db);

async function query(queryString = '', params = []) {
    const results = await pool.query(queryString, params);
    await pool.end();
    return results;
}

module.exports = {
    query
};
