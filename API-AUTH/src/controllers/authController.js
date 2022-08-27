const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretConfig = require('../token.json')

const User = require('../models/user')

class AuthController{

     async signup( req, res){
         try{

             const {email, password, username} = req.body
             const user = await User.create(req.body)
             return res.send({user})
         }
         catch(error){
            res.status(400).json({error: 'Registration failed'})
         }
        
    }

    async signin(req,res){
        try{

            const {email,  password} = req.body
            const user =  await User.findOne({ email})
    
            if(!user){               
                return res.status(400).json({error: "User not found"})
            }  
    
            const verifyPassword = await bcrypt.compare(password, user.password)
            if(!verifyPassword){
                res.status(400).json({error: "Incorrect password"})                
            }

            const token = jwt.sign({id: user.id}, secretConfig.key_secret, {
                expiresIn: "1d"
            })
            user.password = undefined
            return res.send({user, token})

        }
        catch(error){
            res.status(400).json({error: "login failed"})
        }
            
    }

    async me(req,res){
        res.status(200).json({msg: "Perfil"})
    }
}


module.exports = AuthController
