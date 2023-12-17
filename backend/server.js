const express = require('express')
const colors = require('colors')
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

connectDB()

const app = express()

//PROD: Set up port properly

app.use(express.json())
//PROD: possible changes needed
//app.use(express.static('./client/build'))
app.use(express.urlencoded({extended: false}))

app.use('/api/cards', require('./routes/cardRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))