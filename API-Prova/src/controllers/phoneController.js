const User = require('../models/user')


class PhoneController{


    async codePhone(req,res){
        try{

            const min = Math.ceil(9999)
            const max = Math.floor(100000)
            const codeActivationPhone = Math.floor(Math.random() * (max - min) + min )
            console.log("SMS: OK")
            console.log("Código de ativação de telefone: ", codeActivationPhone)
            return res.status(200).json({msg: "code generate"})
        }
        catch(error){
            return res.status(400).json({error: "code not generated"})
        }
    }

    async activePhone(req,res) {
        try{
            const {phone, code} = req.body
            if(!(code > 9999 && code << 100000)){
                return res.status(400).json({error: "invalid code"})
            }
            const user = await User.findOne({phone})

            user.activePhone = true
            user.save()

            return res.status(201).json({msg: "Phone activated successfully"})
            
        }
        catch(error){
            return res.status(400).json({error: "failed to activate phone"})
        }
    }

}

module.exports = PhoneController