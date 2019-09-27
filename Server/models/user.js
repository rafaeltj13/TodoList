const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        login: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    Users.associate = models => {
        Users.hasMany(models.Todos, { as: 'todos', foreignKey: 'userId' })
    }

    Users.beforeCreate((user, options) => {
        const jump = 10;
        return bcrypt.hashSync(user.password, jump);
    })

    return Users
}