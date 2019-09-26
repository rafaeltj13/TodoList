const express = require('express');
const router = express.Router();

const todoRouter = require('./routes/todo.router');

router.use('/todo', todoRouter);

module.exports = router;
