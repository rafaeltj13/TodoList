module.exports = (sequelize, DataTypes) => {
    const Todos = sequelize.define('Todos', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    Todos.associate = function (models) {
        Todos.belongsTo(models.Users, { as: 'user', foreignKey: 'userId'});
    };

    return Todos
}
