const todoService = require('../services/todo.service');

exports.getAll = async (req, res, next) => {
    try {
        const todos = await todoService.getAll();
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
};
exports.get = async (req, res, next) => {
    try {
        const todo = await todoService.get(req.params.idTodo);
        res.status(200).json(todo);
    } catch (error) {
        next(error);
    }
};

exports.add = async (req, res, next) => {
    try {
        const createdTodo = await todoService.add(req.body);
        res.status(201).json(createdTodo);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const updatedTodo = await todoService.update(req.params.id, req.body);
        res.status(204).json(updatedTodo);
    } catch (error) {
        next(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const deletedTodo = await todoService.dele(req.params.id);
        res.status(200).json(deletedTodo);
    } catch (error) {
        next(error);
    }
};