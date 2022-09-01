const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = async (req,res) =>{
    const {email,password, newPassword} = req.body
    const user = await User.findOne({email})

    try{
        const verifyPassword = await bcrypt.compare(password, user.password)
        if(!verifyPassword){
            return res.status(400).json({error: "Incorrect password"})                
        }

        if(password === newPassword){
            return res.status(400).json({error: "Passwords cannot be the same"})
        }

        user.password = newPassword
        user.save({password: newPassword})
        return res.status(201).json({msg: "password changed successfully"})
    }
    
    catch(error){
        return res.status(400).json({error: "Invalid operation"})
    }

}