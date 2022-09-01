const jwt = require('jsonwebtoken')
const secretConfig = require('../token.json')

module.exports = (req,res, next) => {
    try{

        const auth = req.headers.authorization
        if(!auth){
            return res.status(401).json({error: "Invalid credentials"})
        }
        const bearer = auth.split(' ')[0]
        const token = auth.split(' ')[1]
        
        if(!bearer === 'Bearer'){
            return res.status(401).json({error: "Token invalid"})
        }

        const decoded = jwt.verify(token, secretConfig.key_secret)

        req.user = decoded.id
        console.log(req.user)
        next()
    }
    
    catch(error){
        return res.status(401).json({error: "Authenticate failed"})
    }

}