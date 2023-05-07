import express  from 'express'
import post from './postdb.js'

const Post = express.Router()
Post.get('/insert',(req,res)=>{
    
    console.log('post insert ',req.body);
 let state = post.create(req.body).then(resualt=>{
    console.log('resualt ',resualt);
 }).catch(err=>console.log('Err ',err))
res.send('state insert '+state)
})

Post.get('/findbycriteria',(req,res)=>{
    console.log('post findbycriteria ',req.body);

const data = post.findAll()
.then(res=> res.json())
.then(res => res)
.catch(err=>console.log('findbycriteria Err ',err))
res.send(data)
})

export default Post