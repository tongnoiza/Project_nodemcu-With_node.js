import express  from 'express'
import Post from './post/postcontroller.js';
import User from './user/UserController.js';
import Motor from './motorLog/Motorcontroller.js';
import bodyParser from 'body-parser'
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

const port = 3000 | process.env.port
app.use('/post',Post)
app.use('/User',User)
app.use('/LogState',Motor)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})