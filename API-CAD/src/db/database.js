const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:3000/auth')

mongoose.Promise = global.Promise

module.exports = mongoose