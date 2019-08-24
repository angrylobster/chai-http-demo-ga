const USERS = {
    CREATE_TABLE: `CREATE TABLE IF NOT EXISTS users (
        id serial PRIMARY KEY,
        username VARCHAR(15) UNIQUE NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(15) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    )`,
    DROP_TABLE_IF_EXISTS: 'DROP TABLE IF EXISTS users',
    INSERT:
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *'
};

module.exports = USERS;
