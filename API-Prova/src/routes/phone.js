const {Router} = require('express')
const PhoneController = require('../controllers/phoneController')
const phoneRoute = Router()

const phoneExists = require('../middlewares/phoneMiddleware')
const activeAccount = require('../middlewares/contaAtivaMiddleware')

const phoneController = new PhoneController()

phoneRoute.get('/generateCode', phoneController.codePhone)
phoneRoute.post('/activePhone', phoneExists, activeAccount, phoneController.activePhone )

module.exports = phoneRoute