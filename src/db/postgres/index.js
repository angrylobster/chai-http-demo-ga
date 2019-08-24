const { Pool } = require('pg');
const pool = new Pool({
    user: 'shan',
    password: 'abc123',
    host: 'localhost',
    database: 'testdb',
    port: 5432
});

async function query(queryString = '', params = []) {
    const results = await pool.query(queryString, params);
    await pool.end();
    return results;
}

module.exports = {
    query
};
