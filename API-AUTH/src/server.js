const express = require('express')
const authRoute = require('./routes/routes')
const postRoute = require('./routes/post')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/auth', authRoute)
app.use('/post', postRoute)

module.exports = app
