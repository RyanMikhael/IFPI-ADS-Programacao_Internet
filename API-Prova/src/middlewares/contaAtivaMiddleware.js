const User = require('../models/user')
const { use } = require('../routes/auth')

module.exports = async (req,res,next) => {
    const {phone} = req.body
    const user =  await User.findOne({ phone })

    if(!user){               
        return res.status(400).json({error: "User not found"})
    }  

    if(user.activeAccount === false){
        return res.status(400).json({error: "Account was not activated "})
    }

    next()
}