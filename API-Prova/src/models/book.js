const mongoose = require('../database/mongoose')
const {Schema} = mongoose

const bookSchema = new Schema({

    title: {
        type: String,
        require: true
    },
    subtitle: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    completed: {
        type: Boolean,
        default: false
    },
    stopped: {
        type: Boolean,
        default: false
    },
    like: {
        type: Number,
        default: 0
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Notes'
    }]

})

const Book = mongoose.model('Book', bookSchema)

module.exports = Book