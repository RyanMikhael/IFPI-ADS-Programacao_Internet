const jwt = require('jsonwebtoken')
const User = require('../models/user')
const key = require('../config/auth.json')
const code = require('../resources/generateCode')


class AuthController{

    async signup(req, res){
        try{
            
            const {email, password, name } = req.body
            
            const newUser = await User.create(req.body)

            const codeEmail = await code() 
            newUser.code = codeEmail
            newUser.generationCode = Date.now()
            newUser.save()

            
            console.log("Código de ativação de conta via email: ", codeEmail)
            
            return res.send({newUser})

        }

        catch(error){
            console.log(error)
            return res.status(400).json({error: "Registration failed"})
        }
    }

    // Ativação de conta via email
    async activeEmailAccount(req,res){
        try{

            const {email, code} = req.body
            
            const user = await User.findOne({email})
            
            const generatedAt = user.generationCode.getTime()
            const currentTime = Date.now()
            
            if (code !== user.code){
                return res.status(400).json({error: "invalid code"})
            }
            
            if(currentTime - generatedAt > 7200000){
                return res.status(400).json({error : "Expired code"})
            }

            user.activeAccount = true
            user.save()
            
            return res.status(201).json({msg: "Account activated successfully"})
        }

        catch(error){
            console.log(error)
            return res.status(400).json({error: "account was not activated successfully"})
        }
        
    }

    // Login com email
    async signinEmail(req,res){
        try{

            const {email,  password} = req.body
            const user =  await User.findOne({ email })

            const acessToken = jwt.sign({ id: user.id}, key.acess_key, {
                expiresIn: "1d"
            })

            const refreshToken = jwt.sign({id: user.id, acessToken}, key.refresh_key, {
                expiresIn: "2d"
            })

            user.refreshToken = refreshToken
            user.password = undefined
            

            return res.send({user, acessToken })

        }
        catch(error){
            console.log(error)
            return res.status(400).json({error: "login failed"})
        }

            
    }

    // Login com numero do telefone
    async signinPhone(req,res){

        try{

            const {phone,  code} = req.body

            const user =  await User.findOne({ phone })

            const generatedAt = user.generationCode.getTime()
            const currentTime = Date.now()
            
            if (code !== user.code){
                return res.status(400).json({error: "invalid code"})
            }
            
            if(currentTime - generatedAt > 7200000){
                return res.status(400).json({error : "Expired code"})
            }

            const acessToken = jwt.sign({ id: user.id}, key.acess_key, {
                expiresIn: "1d"
            })

            const refreshToken = jwt.sign({id: user.id, acessToken}, key.refresh_key, {
                expiresIn: "2d"
            })

            user.refreshToken = refreshToken
            user.password = undefined
            user.code = undefined
            

            return res.send({user, acessToken })

        }

        catch(error){
            console.log(error)
            return res.status(400).json({error: "login failed"})
        }

    }

    // rota para gerar codigo para realizar login com telefone
    async sendCode(req,res) {
        try{

            const min = Math.ceil(9999)
            const max = Math.floor(100000)
            const codePhone = Math.floor(Math.random() * (max - min) + min )
            console.log("Código de login com telefone: ", codePhone)
            return res.status(200).json({msg: "code generate"})
        }
        
        catch(error){
            return res.status(400).json({error: "code not generated"})
        }
    }


    async refresh(req,res){

        try{

            const {email} = req.body
            const user = await User.findOne({email})

            const acessToken = jwt.sign({ token: user.refreshToken}, key.acess_key, {
                expiresIn: "1d"
            })

            const refreshToken = jwt.sign({token: user.refreshToken}, key.refresh_key, {
                expiresIn: "2d"
            })

            user.refreshToken = refreshToken
            
            return res.send({acessToken, refreshToken })
        }
        
        catch(err){
            return res.status(400).json({error: "Ungenerated tokens"})
        }

    }


}

module.exports = AuthController