const {Router} = require('express')
const postRoute = Router()
const authLogin = require('../middlewares/authMiddleware')

postRoute.get('/', authLogin, (req, res) => {
    res.json({posts: []})
}) 
postRoute.post('/', authLogin, (req,res) => {
    res.json({
        post: {
            id: "1",
            title: "My post"
        }
    })
})

module.exports = postRoute