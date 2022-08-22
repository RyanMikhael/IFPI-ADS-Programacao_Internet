const express = require('express')
const route = require('./routes/routes')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/auth', route)

module.exports = app
