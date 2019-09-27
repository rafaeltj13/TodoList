const { Users } = require('../models');

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
        where: { username: body.username }
    });

    const jwt = generateJWT(user);
    delete user.dataValues['password'];

    return { user, jwt }
};

const generateJWT = user => {
    return jwt.sign({ id: user.id }, secret);
};