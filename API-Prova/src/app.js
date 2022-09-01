const { json } = require('express')
const express = require('express')
const app = express()
const auth = require('./routes/auth')
const phone = require('./routes/phone')

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/auth', auth)
app.use('/me', phone )

module.exports = app