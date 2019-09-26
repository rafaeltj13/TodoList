const database = {

    development: {
        username: "root",
        password: "root",
        database: "todoList",
        dialect: "mysql",
        options: {
            host: "localhost",
            dialect: "mysql",
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        }
    },
    production: {
        username: "",
        password: "",
        database: "",
        dialect: "mysql",
        options: {
            host: "",
            dialect: "mysql",
            pool: {
                max: 5,
                min: 0,
                idle: 10000
            }
        }
    }
};

module.exports = database[process.env.NODE_ENV || 'development'];