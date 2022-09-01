const User = require('../models/user')

module.exports = async (req, res, next) => {
    const {phone} = req.body
    const phoneAlreadyExists = await User.findOne({phone})

    if(phoneAlreadyExists.activePhone){
        return res.status(400).json({error: "Phone already exists"})
    }
    next()
    
}