const express = require('express')
const userController = require('../controllers/user.controller')
const router = express.Router()

router.route('/')
    .get(userController.getAll)
    .post(userController.add);

router.route('/:idUser')
    .get(userController.get)
    .patch(userController.update)
    .delete(userController.delete);

module.exports = router;
