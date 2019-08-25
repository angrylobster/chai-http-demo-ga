const { Pool } = require('pg');
const config = require('../../config');
const pool = new Pool(config.db);

async function query(queryString = '', params = []) {
    const client = await pool.connect();
    try {
        if (config.env === 'test') await client.query('BEGIN');
        const { rows: results } = await client.query(queryString, params);
        return results;
    } finally {
        if (config.env === 'test') await client.query('ROLLBACK');
        client.release();
    }
}

async function end() {
    await pool.end();
}

module.exports = {
    end,
    query
};
