const fs = require('fs');
const path = require('path');

// Data types
const Sequelize = require('sequelize');

const config = require('../database/config');

const database = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config.options);

fs
    .readdirSync(__dirname)
    .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname, file));
        database[model.name] = model;
    });

Object.keys(database).forEach(modelName => {
    if (database[modelName].associate) {
        database[modelName].associate(database);
    }
});

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;
