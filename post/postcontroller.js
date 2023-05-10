import express from 'express'
// import {post , sequelize} from './postdb.js'
import { post, sequelize } from './postdb.js'
const Post = express.Router()
Post.get('/create', async (req, res) => {
    console.log('body ', req.body);
    req.body.arr.forEach(async v => {
        await post.create(v)
        return v
    });
    console.log('state', state);
    console.log('state' + state);
    res.json({ resualt: state })
})

Post.get('/findbypk', async (req, res) => {
    console.log('body ', req.body);
    const d = await post.findByPk(req.body.id)
    res.send(d)
})
Post.get('/calldata', async (req, res) => {
    const data = await post.findAll({ offset: 5, limit: 5 })
    res.send(data)
})
Post.get('/postDetail', async (req, res) => {
    let head = await post.findAll({
        where: {
            id: req.body.id
        },
         attributes: ['PostHeader', 'PostMessage']
    })
    console.log('hhh ', head);
    const data = await sequelize.query(`SELECT commnetMessage FROM comments where comments.Commentid = ${req.body.id}`)
    let q = {h:head[0] ,data:data[0]}
    res.send(q)
})


export default Post