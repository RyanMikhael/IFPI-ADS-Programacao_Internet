const {Router} = require('express')
const passwordController = require('../controllers/passwordController')
const authMiddleware = require('../middlewares/authMiddleware')
const changePassword = Router()

changePassword.post('/password',authMiddleware, passwordController)

module.exports = changePassword