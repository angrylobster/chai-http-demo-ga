const { user: userController } = require('../controllers');

module.exports = app => {
    app.get('/users', userController.findAll);
};
