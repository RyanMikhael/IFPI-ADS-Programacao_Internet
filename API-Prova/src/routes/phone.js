const {Router} = require('express')
const PhoneController = require('../controllers/phoneController')
const phoneRoute = Router()

const phoneExists = require('../middlewares/phoneMiddleware')
const activeAccount = require('../middlewares/contaAtivaMiddleware')
const auth = require('../middlewares/authMiddleware')

const phoneController = new PhoneController()


phoneRoute.post('/addPhone', auth, phoneController.addPhone)
phoneRoute.get('/generateCode',auth,  phoneController.codePhone)
phoneRoute.post('/activePhone',auth,  phoneExists, activeAccount, phoneController.activePhone )

module.exports = phoneRoute