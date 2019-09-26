const database = {
    development: {
        dialect: 'mysql',
        username: 'root',
        password: 'root',
        database: 'todoList',
        host: 'localhost',
        dialectOptions: {
            options: {
                requestTimeout: 0
            }
        }
    },
    test: {
        dialect: 'mysql',
        username: 'root',
        password: 'root',
        database: 'todoList-test',
        host: 'localhost',
        dialectOptions: {
            options: {
                requestTimeout: 0
            }
        }
    },
    production: {
        dialect: 'mysql',
        username: '',
        password: '',
        database: 'todoList',
        host: 'localhost',
        dialectOptions: {
            options: {
                requestTimeout: 0
            }
        }
    }
};

module.exports = database[process.env.NODE_ENV || 'development'];