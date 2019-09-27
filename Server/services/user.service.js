const { Users } = require('../models');

exports.getAll = async () => {
    return await Users.findAll({
        attributes: {
            exclude: ['password']
        }
    });
};

exports.get = async userId => {
    return await Users.findByPk(userId, {
        attributes: {
            exclude: ['password']
        },
        include: { all: true }
    });
};

exports.add = async user => {
    return await Users.create(user);
};

exports.update = async (id, user) => {
    return await Users.update(user, { where: { id } });
};

exports.delete = async id => {
    return await Users.delete(id);
};