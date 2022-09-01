const {Router} = require('express')
const AuthController = require('../controllers/authController')
const authRoute = Router()
const userSignup = require('../middlewares/signupMiddleware')
const userSignin = require('../middlewares/signinMiddleware')

const activeAccount = require('../middlewares/contaAtivaMiddleware')

const authController = new AuthController()
authRoute.post('/signup', userSignup,  authController.signup)
authRoute.post('/signinEmail', userSignin, authController.signinEmail )
authRoute.get('/signinPhone/sendCode', authController.sendCode)
authRoute.post('/signinPhone', activeAccount, authController.signinPhone)
authRoute.post('/refresh', authController.refresh )
authRoute.post('/ativarContaEmail', authController.activeEmailAccount)

module.exports = authRoute