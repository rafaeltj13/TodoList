const userService = require('../services/user.service');

exports.getAll = async (req, res, next) => {
    try {
        const users = await userService.getAll();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

exports.get = async (req, res, next) => {
    try {
        const user = await userService.get(req.params.idUser);
        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

exports.add = async (req, res, next) => {
    try {
        const createdUser = await userService.add(req.body);
        res.status(201).json(createdUser);
    } catch (error) {
        next(error);
    }
};

exports.update = async (req, res, next) => {
    try {
        const updatedUser = await userService.update(req.params.id, req.body);
        res.status(204).json(updatedUser);
    } catch (error) {
        next(error);
    }
};

exports.delete = async (req, res, next) => {
    try {
        const deletedUser = await userService.dele(req.params.id);
        res.status(200).json(deletedUser);
    } catch (error) {
        next(error);
    }
};