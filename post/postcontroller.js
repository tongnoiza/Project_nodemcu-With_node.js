import express from 'express'
import { post, sequelize } from './postdb.js'
const Post = express.Router()
import { Op } from "sequelize"

Post.post('/find', async (req, res) => {
    const { perPage , paging} = req.body
    console.log('/find',req.body);
   const data = await post.findAll({offset: (paging-1)*10, limit: 10})
//    const data = await post.findAll()
    res.send( data)
})

Post.post('/insert', async (req, res) => {
    console.log('req.body ',req.body);
        let state = await post.create(req.body)
    res.json({ resualt: state })
})

export default Post