const { model } = require('mongoose')
const mongoose = require('../database/mongoose')
const {Schema} = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    
    email: {
        type: String,
        require: true,
        unique: true,
    },
    name: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String
    },
    activePhone: {
        type: Boolean,
        default: false
    },
    activeAccount: {
        type: Boolean,
        default: false
    },
    refreshToken: {
        type: String
    }
})

userSchema.pre('save', async function( next){
    const salt = 10
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash

    next()

})


const User = mongoose.model('User', userSchema)
module.exports = User