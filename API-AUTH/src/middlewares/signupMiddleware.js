const User = require('../models/user')


module.exports = async (req,res, next) =>{
    const {email} = req.body
    const userAlreadyExists = await User.findOne({email})

    if(userAlreadyExists){
        return res.status(400).json({error: "User already exists"})
    }
    next()
    
}