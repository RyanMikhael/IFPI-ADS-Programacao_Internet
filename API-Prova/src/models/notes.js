const mongoose = require('../database/mongoose')
const {Schema} = mongoose

const notesSchema = new Schema({

    description: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    book: {    
        type: Schema.Types.ObjectId,
        ref: 'Book'
    }
    

})

const Notes = mongoose.model('Notes', notesSchema)

module.exports = Notes