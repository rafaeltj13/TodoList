module.exports = (sequelize, DataTypes) => {
    const Todos = sequelize.define('Todos', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        desctiption: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    })

    return Todo
}
