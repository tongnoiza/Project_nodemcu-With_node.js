import express  from 'express'
import post from './postdb.js'

const Post = express.Router()
Post.get('/insert',(req,res)=>{
    console.log('post insert ',req.body);
post.create(req.body)
res.send('insert post')
})

Post.get('/findbycriteria',async (req,res)=>{
    console.log('post insert ',req.body);
let data = await post.findAll()
res.send(data)
})

export default Post