const mongoose = require('../database/mongoose')
const bcrypt = require('bcrypt')
const {Schema} = mongoose

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
        type: String,
        unique: true,
        sparse: true
        
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
    },
    code: {
        type: Number,
    },
    generationCode: {
        type: Date
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