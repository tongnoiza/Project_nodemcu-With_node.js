import express  from 'express'
import Motorlogging from './MotorDB.js';

const Router = express.Router()

Router.get('/insert',(req,res)=>{
    console.log('Mortor insert ',req.query);
let state = Motorlogging.create(req.query)
res.send(state)
})

Router.get('/findbycriteria',async (req,res)=>{
// let data = await Userdb.findAll({ where: req.body})
res.send(true)
})

export default Router 