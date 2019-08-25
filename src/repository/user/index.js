const { QUERIES } = require('../../constants');
const { db } = require('../../db');

function deleteUser(id) {
    return db.query(QUERIES.USERS.DELETE, [id]);
}

function findAll() {
    return db.query(QUERIES.USERS.FIND_ALL);
}

function insertUser(username = '', email = '', password = '') {
    return db.query(QUERIES.USERS.INSERT, [username, email, password]);
}

module.exports = {
    deleteUser,
    end: db.end,
    findAll,
    insertUser
};
