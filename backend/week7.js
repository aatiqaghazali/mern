import express from "express";

import mongoose from "mongoose";

import {Todo} from './modals/todo.js';
import blogs from './routes/blog.js'

async function main()
{
  await mongoose.connect('mongodb://localhost:27017/admin')
}
main().then(console.log('connected'))
const app = express()
const port = 3000

/*app.get('/', (req, res) => {
  let siteName='addidas';
  let fileName='aatiqa_resume.jpg'
  res.sendFile('templates/index.html', {root: __dirname })
})*/
app.get('/', (req, res) => {
 const todo= new Todo({title:'aatiqa', todo:'take class', isDone:false})
 todo.save();
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
export default app;
