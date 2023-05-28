import express  from 'express'
import Post from './post/postcontroller.js';
// import User from './user/UserController.js';
import comment from './comment/comment.js';
// import Motor from './motorLog/Motorcontroller.js';
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
app.use(cors(
  {
    origin: process.env.HOST_NAME,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }
))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
const port = 3001;
app.use('/post',Post)
app.use('/Comment',comment)

// app.use('/User',User)
// app.use('/LogState',Motor)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})