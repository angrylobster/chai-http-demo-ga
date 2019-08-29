const env = process.env.NODE_ENV || 'development';
const config = {
    env: env,
    db: {
        database: 'mydb',
        host: 'localhost',
        password: 'abc123',
        port: 5432,
        user: 'shan'
    },
    server: {
        port: 3000
    }
};

module.exports = config;
