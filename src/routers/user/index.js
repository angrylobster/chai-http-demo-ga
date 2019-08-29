const { Router } = require('express');
const router = Router();
const { user: userController } = require('../../controllers');

router.get('/', userController.findAll);
router.post('/', userController.insertUser);
router.delete('/', userController.deleteUser);

module.exports = router;
