const { user: userController } = require('../controllers');

module.exports = server => {
    server.get('/users', userController.findAll);
    server.post('/users', userController.insertUser);
    server.delete('/users', userController.deleteUser);
};
