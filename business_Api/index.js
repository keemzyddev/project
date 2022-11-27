const express = require('express') 
// const mongoose = require ('mongoose')
const colors = require ('colors')
const connectDB = require('./config/db')
require('dotenv').config()
const authRoute = require('./routes/auth')
const PORT = process.env.PORT || 5000
const app = express()

connectDB()

// all API
app.use(express.json())
app.use('/api/auth', authRoute)

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`))