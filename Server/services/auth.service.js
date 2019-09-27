const { Users } = require('../models');
const jwt = require('jsonwebtoken');

let secret = 't0d0';

exports.verifyToken = (token, next) => {
    jwt.verify(token, secret, (err, decoded) => {
        if (err) next(err);

        Users.findOne({ where: { id: decoded.id } }).then((user) => {
            req.user = user;
            next();
        });
    });

};

exports.signin = async body => {
    const user = await Users.findOne({
        where: { login: body.username }
    });

    const token = generateJWT(user);
    delete user.dataValues['password'];

    return { user, token }
};

const generateJWT = user => {
    return jwt.sign({ id: user.id }, secret);
};