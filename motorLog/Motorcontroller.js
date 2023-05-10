import express  from 'express'
import Motorlogging from './MotorDB.js';

const Router = express.Router()

Router.get('/insert/:status/:motor_no',(req,res)=>{

console.log('Mortor insert ',req.params);
 Motorlogging.create(req.params)
res.send(req.params)
})

Router.get('/findbycriteria',async (req,res)=>{
let data = await Motorlogging.findAll()
res.send(data)
})

export default Router 