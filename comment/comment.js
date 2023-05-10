import express from 'express'
import Comment from './comentdb.js';

const Router = express.Router()
Router.get('/CreateComment', async (req, res) => {
    console.log('body ', req.body);
   for (let index = 0; index <1000; index++) {
    req.body.commnetMessage +' '+index
await Comment.create( req.body)
   }
    res.send(true)
})

Router.get('/findbypk', async (req, res) => {
    console.log('body ', req.body);
    const d = await Comment.findByPk(req.body.id)
    res.send(d)
})

export default Router