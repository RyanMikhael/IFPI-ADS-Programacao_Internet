const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {

    const{email, password} = req.body
    const user =  await User.findOne({ email })

    if(!user){               
        return res.status(400).json({error: "User not found"})
    }  

    const verifyPassword = await bcrypt.compare(password, user.password)
    if(!verifyPassword){
        return res.status(400).json({error: "Incorrect password"})                
    }

    next()
}