const mongoose = require('../databases/db')
const {Schema} = require('mongoose')

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post