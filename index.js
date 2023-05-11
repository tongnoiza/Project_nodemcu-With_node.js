import express  from 'express'
// import Post from './post/postcontroller.js';
// import User from './user/UserController.js';
// import comment from './comment/comment.js';

import Motor from './motorLog/Motorcontroller.js';
import bodyParser from 'body-parser'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*'); //หรือใส่แค่เฉพาะ domain ที่ต้องการได้
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type: text/html; charset=UTF-8');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());
const port = process.env.PORT ||443
// app.use('/post',Post)
// app.use('/User',User)
// app.use('/Comment',comment)

app.use('/LogState',Motor)
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })