const { Todos } = require('../models');

exports.getAll = async () => {
    return await Todos.findAll({});
};

exports.get = async todoId => {
    return await Todos.findByPk(todoId);
};

exports.add = async todo => {
    return await Todos.create(todo);
};

exports.update = async (id, todo) => {
    return await Todos.update(todo, { where: { id } });
};

exports.update = async id => {
    return await Todos.delete(id);
};