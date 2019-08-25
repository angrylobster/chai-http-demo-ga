const user = require('./user');

module.exports = {
    user,
    dropConnection: user.dropConnection
};
