const {Router} = require('express')
const AuthController = require('../controllers/authController')
const route = Router()
const authController = new AuthController()

route.post('/signup', authController.signup)
route.post('/signin', authController.signin)
route.post('/me', authController.me)
route.get('/', (req, res) => {
    res.send('ok')
})


module.exports = route