import express  from 'express'
import post from './postdb.js'

const Post = express.Router()
Post.get('/insert',async (req,res)=>{
    console.log('post insert ',req.body);
let state = await post.create(req.body)
res.send('state insert ',state)
})

Post.get('/findbycriteria',async (req,res)=>{
    console.log('post findbycriteria ',req.body);
let data = await post.findAll().catch(err=>console.log)
res.send(data)
})

export default Post