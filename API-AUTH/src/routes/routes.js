const {Router} = require('express')
const AuthController = require('../controllers/authController')
const route = Router()

const authController = new AuthController()
const userSignup = require('../middlewares/signupMiddleware')

route.post('/signup',userSignup, authController.signup)
route.post('/signin', authController.signin)
route.post('/refresh', authController.refresh)
route.get('/', (req, res) => {
    res.send('ok')
})


module.exports = route