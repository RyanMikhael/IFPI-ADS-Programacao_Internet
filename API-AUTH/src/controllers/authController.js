const express = require('express')


const User = require('../models/user')

const router = express.Router()

router.post('/signup', async (req,res) =>{
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

})

router.post('/signin', async (req,res) => {

    const {email,  password} = req.body
    
    const user = await User.findOne({ email, password })
    if(user!= null){

        return res.send({user})
    }
    res.status(400).json({error: "Incorrect email or password"})
    
})

router.post('/me', (req, res) =>{
    res.status(200).json({msg: "Perfil"})
})

module.exports = app => app.use('/auth', router)