const express = require('express');
const router = express.Router();

const signinRouter = require('./routes/auth.router');
const todoRouter = require('./routes/todo.router');
const userRouter = require('./routes/user.router');

router.use('/signin', signinRouter)
router.use('/todos', todoRouter);
router.use('/users', userRouter);

module.exports = router;
