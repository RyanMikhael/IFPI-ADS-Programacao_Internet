const jwt = require('jsonwebtoken')
const User = require('../models/user')
const key = require('../config/auth.json')

/*
    Quando o usuário fizer cadastro, deve ser gerado um codigo de 5 digitos numéricos para
    validar a ativação da conta, esse código deve ter validade de 2 horas, esse código deve ser
    devolvido no console
*/

class AuthController{

    async signup(req, res){
        try{
            
            const {email, password, name, phone } = req.body
            
            const newUser = await User.create(req.body)
               
            const min = Math.ceil(9999)
            const max = Math.floor(100000)
            const codigoEmail = Math.floor(Math.random() * (max - min) + min )
            console.log("SMS: OK")
            console.log("Código de ativação de conta via email: ", codigoEmail)

            return res.send({newUser})

        }

        catch(error){
            console.log(error)
            return res.status(400).json({error: "Registration failed"})
        }
    }

    async activeEmailAccount(req,res){
        try{

            const {email, code} = req.body
            if(!(code > 9999 && code << 100000)){
                return res.status(400).json({error: "invalid code"})
            }
            const user = await User.findOne({email})
    
            user.activeAccount = true
            user.save()
            
            return res.status(201).json({msg: "Account activated successfully"})
        }

        catch(error){
            console.log(error)
            return res.status(400).json({error: "account was not activated successfully"})
        }
        
    }


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


    async signinPhone(req,res){

        try{

            const {phone,  code} = req.body
            const user =  await User.findOne({ phone })

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


    async sendCode(req,res) {
        try{

            const min = Math.ceil(9999)
            const max = Math.floor(100000)
            const codePhone = Math.floor(Math.random() * (max - min) + min )
            console.log("SMS: OK")
            console.log("Código de ativação de telefone: ", codePhone)
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