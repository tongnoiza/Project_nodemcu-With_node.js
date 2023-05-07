import express  from 'express'
import Userdb from './UserDB.js';
const Router = express.Router()

Router.get('/insert',(req,res)=>{
    console.log('UserDB insert ',req.body);
let state = Userdb.create(req.body)
res.send(state)
})

Router .get('/findbycriteria',async (req,res)=>{
    console.log('UserDB insert ',req.body);
let data = await Userdb.findAll({ where: req.body})
res.send(data)
})

export default Router 