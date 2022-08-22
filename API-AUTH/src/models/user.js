const mongoose = require('../databases/db')
const {Schema} = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    email : {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
    }
})

userSchema.pre('save', async function(){
    const saltRounds = 10
    const hash = await bcrypt.hash(this.password, saltRounds)
    this.password = hash
})

const User = mongoose.model('User', userSchema)

module.exports = User