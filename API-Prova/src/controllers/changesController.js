const User = require('../models/user')
const bcrypt = require('bcrypt')

class ChangesController{

    async changePassword(req,res){

        const {email,password, newPassword} = req.body
        const user = await User.findOne({email})

        try{

            const verifyPassword = bcrypt.compare(password, user.password)

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


    async changePhone(req,res){
        try{

            const {phone, newPhone} = req.body
    
            const user = await User.findOne({phone})
    
            user.phone = newPhone
            user.save({phone: newPhone})
            
            return res.status(201).json({msg: "phone changed successfully"})
        }
        
        catch(error){
            console.log(error)
            return res.status(400).json({error: "invalid operation"})
        }

    }
}

module.exports = ChangesController