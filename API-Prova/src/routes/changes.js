const {Router} = require('express')
const ChangesController = require('../controllers/changesController')
const changeRoute = Router()
const auth = require('../middlewares/authMiddleware')

const changesController = new ChangesController()

changeRoute.post('/password', auth, changesController.changePassword)

changeRoute.post('/phone', auth, changesController.changePhone)

module.exports = changeRoute