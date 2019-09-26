const express = require('express')
const todoController = require('../controllers/todo.controller')
const router = express.Router()

router.route('/')
    .get(todoController.getAll)
    .post(todoController.add);

router.route('/:idTodo')
    .get(todoController.get)
    .patch(todoController.update)
    .delete(todoController.delete)

// router.param('idTodo', todoController.load)

module.exports = router
