const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

// const errorHandler = require('./middlewares/error')
const routers = require('./index.routers')

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

if (process.env.NOD_ENV === 'development') {
    app.use(morgan('tiny'))
}

app.use('/api', routers)

// app.use(errorHandler)

const port = process.env.PORT || 1337

app.listen(port, () => {
    console.log(`TodoList Api listening on port ${port}!`)
})
