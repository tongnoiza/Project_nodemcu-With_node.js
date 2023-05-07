import express  from 'express'
import post from './postdb.js'

const Post = express.Router()
Post.get('/insert',(req,res)=>{
    let state
    console.log('post insert ',req.body);
 post.create(req.body).then(resualt=>{
    state = resualt
    console.log('resualt ',resualt);
 }).catch(err=>console.log('Err ',err))
res.send('state insert '+state)
})

Post.get('/findbycriteria',(req,res)=>{
    console.log('post findbycriteria ',req.body);
let data 
post.findAll()
.then(res=>{
     console.log('findbycriteria ',res)
     res.send(res)
    })
.catch(err=>console.log('findbycriteria Err ',err))

})

export default Post