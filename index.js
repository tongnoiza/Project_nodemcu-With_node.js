import express  from 'express'
import Post from './post/postcontroller.js';
import User from './user/UserController.js';
import Motor from './motorLog/Motorcontroller.js';
import comment from './comment/comment.js';
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
app.use(cors({
  origin:'*'
}))
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
const port = process.env.PORT 
app.use('/post',Post)
app.use('/User',User)
app.use('/LogState',Motor)
app.use('/Comment',comment)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})