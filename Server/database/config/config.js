const database = {
    development: {
        dialect: 'mysql',
        username: 'root',
        password: 'root',
        database: 'todolist',
        host: 'localhost',
        options: {
            host: "localhost",
            dialect: "mysql",
        }
    },
    test: {
        dialect: 'mysql',
        username: 'root',
        password: 'root',
        database: 'todolist-test',
        host: 'localhost',
        options: {
            host: "localhost",
            dialect: "mysql",
        }
    },
    production: {
        dialect: 'mysql',
        username: '',
        password: '',
        database: 'todolist',
        host: 'localhost',
        options: {
            host: "localhost",
            dialect: "mysql",
        }
    }
};

module.exports = database['development'];