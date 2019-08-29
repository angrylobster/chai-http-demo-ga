const env = process.env.NODE_ENV || 'development';
const config = {
    env: env,
    db: {
        database: 'mydb',
        host: 'localhost',
        password: 'password',
        port: 5432,
        user: 'user'
    },
    server: {
        port: 3000
    }
};

module.exports = config;
