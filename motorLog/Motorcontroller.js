import express  from 'express'
import Motorlogging from './MotorDB.js';

const Router = express.Router()
Router.get('/insert',async (req,res)=>{
console.log('Mortor insert ',req.query);
await Motorlogging.create(req.query)
res.send(req.query)
})

Router.get('/findbycriteria',async (req,res)=>{
let data = await Motorlogging.findAll()
res.send(data)
})

export default Router 