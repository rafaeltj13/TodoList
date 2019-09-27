const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const app = express();

// const errorHandler = require('./middlewares/error')
const routers = require('./index.routers');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
const clientDir = path.join(__dirname, '..', 'TodoList');

app.use(morgan('tiny'));
app.use('/api', routers);
app.use(express.static(clientDir));

// app.use(errorHandler)

const port = 1337;

app.listen(port, () => {
    console.log(`TodoList Api listening on port ${port}!`);
});
