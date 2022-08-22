const express = require('express')
const bcrypt = require('bcrypt')

const User = require('../models/user')

class AuthController{

     async signup(req, res){
        const {email} = req.body
    
        const userAlreadyExists = await User.findOne({email})
        try{
    
            if(!userAlreadyExists){
                const user = await User.create(req.body)
            
                return res.send({user})
            }
            return res.status(400).json({error: "User already exists"})
        }
        catch{
            res.status(400).json({error: 'Registration failed'})
            
        }  
    }

    async signin(req,res){
        const {email,  password} = req.body
        try{

            const user = await User.findOne({ email}).select('+password')
            const verifyPassword = await bcrypt.compare(password, user.password)
            if(!verifyPassword){
                res.status(400).json({error: "Incorrect password"})
            }
            if(user!= null){
    
                return res.send({user})
            }
        }
        catch(error){

            res.status(400).json({error: "Login failed"})
        }
    }


    async me(req,res){
        res.status(200).json({msg: "Perfil"})
    }
}


module.exports = AuthController