import express  from 'express'
import post from './postdb.js'

const Post = express.Router()
Post.get('/insert',async (req,res)=>{
    console.log('post insert ',req.body);
 let state = await post.create(req.body).then(resualt=>{
    console.log('resualt ',resualt);
 }).catch(err=>console.log('Err ',err))
res.send('state insert '+state)
})

Post.get('/findbycriteria',(req,res)=>{
    console.log('post findbycriteria ',req.body);
post.findAll()
.then(data=> {
    res.send(data)
}).catch(err=>{
    res.send(err)
})

})

export default Post