const { user: userController } = require('../controllers');

module.exports = app => {
    app.get('/users', userController.findAll);
    app.post('/users', userController.insertUser);
    app.delete('/users', userController.deleteUser);
};
