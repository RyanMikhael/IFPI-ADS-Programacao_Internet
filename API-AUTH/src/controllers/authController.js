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
            return res.status(400).json({error: 'Registration failed'})
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
                return res.status(400).json({error: "Incorrect password"})                
            }

            const token = jwt.sign({ id: user.id}, secretConfig.key_secret, {
                expiresIn: 60
            })

            const refreshToken = jwt.sign({id: user.id, token}, secretConfig.refresh_key, {
                expiresIn: 180
            })

            user.refreshToken = refreshToken
            user.password = undefined

            console.log(secretConfig.refresh_key)
            return res.send({user, token })

        }
        catch(error){
            return res.status(400).json({error: "login failed"})
        }

            
    }
    async refresh(req,res){
        try{

            // const auth = req.headers.authorization
            // if(!auth){
            //     return res.status(401).json({error: "Invalid credentials"})
            // }
            // const bearer = auth.split(' ')[0]
            // const token = auth.split(' ')[1]
            
            // if(!bearer === 'Bearer'){
            //     return res.status(401).json({error: "Token invalid"})
            // }
            const {email} = req.body
            const user = await User.findOne({email})

            const acessToken = jwt.sign({ token: user.refreshToken}, secretConfig.key_secret, {
                expiresIn: 60
            })

            const refreshToken = jwt.sign({token: user.refreshToken}, secretConfig.refresh_key, {
                expiresIn: 180
            })

            user.refreshToken = refreshToken
            console.log(user.refreshToken)
            
            return res.send({acessToken, refreshToken })
        }
        
        catch(err){
            return res.status(400).json({error: "Ungenerated tokens"})
        }
    }

}


module.exports = AuthController
