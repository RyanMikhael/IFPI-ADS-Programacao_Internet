const User = require('../models/user')
const generateCode = require('../resources/generateCode')


class PhoneController{
    // Adicionar numero de telefone do usuario
    async addPhone(req,res){
        try{

            const {email, phone} = req.body
    
            const user = await User.findOne({email})

            const phoneAlreadyExists = await User.findOne({phone})
            if(phoneAlreadyExists){
                return res.status(400).json({error: "phone already exists"})
            }
            

            user.phone = phone
            user.save()
    
            return res.send({phone})

        }

        catch(error){
            return res.status(400).json({error: "Could not add phone number"})
        }
    }

    // Rota para gerar codigo de ativação de telefone
    async codePhone(req,res){
        try{

            const {phone} = req.body
            const codeActivationPhone = await generateCode()
            
            const user = await User.findOne({phone})
            user.code = codeActivationPhone
            user.generationCode = Date.now()
            user.save()
            
            
            console.log("Código de ativação de telefone: ", codeActivationPhone)
            return res.status(200).json({msg: "code generate"})
        }
        
        catch(error){
            console.log(error)
            return res.status(400).json({error: "code not generated"})
        }
    }

    // Ativar telefone
    async activePhone(req,res) {

        try{

            const {phone, code} = req.body
            
            const user = await User.findOne({phone})

            const generatedAt = user.generationCode.getTime()
            const currentTime = Date.now()
            
            if (code !== user.code){
                return res.status(400).json({error: "invalid code"})
            }
            
            if(currentTime - generatedAt > 7200000){
                return res.status(400).json({error : "Expired code"})
            }

            user.activePhone = true
            user.save()

            return res.status(201).json({msg: "Phone activated successfully"})
            
        }
        catch(error){
            console.log(error)
            return res.status(400).json({error: "failed to activate phone"})
        }
    }

}

module.exports = PhoneController