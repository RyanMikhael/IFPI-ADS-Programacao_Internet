const express = require('express')
const authRoute = require('./routes/routes')
const postRoute = require('./routes/posts')
const changePassword = require('./routes/changePassword')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/auth', authRoute)
app.use('/post', postRoute)
app.use('/me', changePassword)

module.exports = app
