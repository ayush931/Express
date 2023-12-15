require('dotenv').config()

const express = require('express')

const cors = require('cors')

//Express middleware

const connectToDb = require('./config/db.js')

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended: true}))

app.use(cors())


// init connection to db

connectToDb()

const userRoutes = require('./routes/userRoutes.js')

// export default app, This export syntax is for import module.

app.use('/', userRoutes)

module.exports = app