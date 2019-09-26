const { Todos } = require('../models');
const attributes = { exclude: ['createdBy', 'updatedBy'] };

exports.getAll = async () => {
    return await Todos.findAll({});
};

exports.get = async todoId => {
    return await Todos.findByPk(todoId);
};

exports.add = async todo => {
    return await Todos.create(todo);
};