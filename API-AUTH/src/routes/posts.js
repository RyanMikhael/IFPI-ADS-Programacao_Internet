const {Router} = require('express')
const PostController = require('../controllers/postController')
const postRoute = Router()
const authLogin = require('../middlewares/authMiddleware')

const postController = new PostController()

postRoute.post('/', authLogin, postController.createPost)
postRoute.get('/:id', authLogin, postController.showPost)
postRoute.get('/', authLogin, postController.showAllPosts)
postRoute.put('/:id', authLogin, postController.updatePost)
postRoute.delete('/:id', authLogin, postController.deletePost)

module.exports = postRoute