
const Post = require('../models/post')

class PostController {
    async createPost (req, res) {
        try{

            const {title, description} = req.body
            const post = await Post.create(req.body)
            return res.send({post})
            
        }
        catch(error){
            return res.status(400).json({error: "Post not created"})
        }

    } 

    async showPost(req,res) {

    }

    async showAllPosts(req,res){
        try{
            const posts = await Post.find()
            return res.send({posts})
        }
        catch(err){
            return res.status(400).json({error: "Feed not loaded"})

        }
    }

    async updatePost(req,res){

    }

    async deletePost(req,res){

    }
}

module.exports = PostController