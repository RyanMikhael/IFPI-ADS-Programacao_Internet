const {Router} = require('express')
const readingRoute = Router()
const authLogin = require('../middlewares/authMiddleware')
const ReadingController = require('../controllers/readingController')

const readingController = new ReadingController()


readingRoute.post('/', authLogin, readingController.createReading )
readingRoute.get('/:id',authLogin, readingController.listReading)
readingRoute.get('/', authLogin, readingController.showAllReadings)
readingRoute.delete('/:id', authLogin, readingController.removeReading)

readingRoute.post('/like/:id', authLogin, readingController.like)

readingRoute.post('/note/:id', authLogin, readingController.addNote)
readingRoute.get('/note/:id', authLogin, readingController.listNote)
readingRoute.delete('/note/:id', authLogin, readingController.deleteNote)

readingRoute.post('/completed/:id',authLogin, readingController.readingCompleted)
readingRoute.post('/stopped/:id',authLogin, readingController.readingStopped)

module.exports = readingRoute