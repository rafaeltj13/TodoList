const todoService = require('../services/todo.service');
const restService = require('../utils/rest.service');

exports.getAll = async (req, res, next) => {
    try {
        const todos = await todoService.getAll();
        restService.sendJson(res, 200, todos);
    } catch (error) {
        next(error);
    }
};

exports.get = async (req, res, next) => {
    try {
        const todo = await todoService.get(req.params.id);
        restService.sendJson(res, 200, todo);
    } catch (error) {
        next(error);
    }
};

exports.add = async (req, res, next) => {
    try {
        const createdTodo = await todoService.add(req.body);
        restService.sendJson(res, 201, createdTodo);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const updatedTodo = await todoService.update(req.params.id, req.body);
        restService.sendJson(res, 204, updatedTodo);
    } catch (error) {
        next(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const deletedTodo = await todoService.dele(req.params.id);
        restService.sendJson(res, 200, deletedTodo);
    } catch (error) {
        next(error);
    }
};