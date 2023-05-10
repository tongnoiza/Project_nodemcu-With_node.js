import express from 'express'
import { post, sequelize } from './postdb.js'
const Post = express.Router()
Post.get('/create', async (req, res) => {
    req.body.arr.forEach(async v => {
        await post.create(v)
        return v
    });
    res.json({ resualt: state })
})






export default Post