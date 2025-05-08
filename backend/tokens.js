// getting-started.js
import mongoose from "mongoose";
import express from 'express';
import {Feedback} from './modals/feedback.js'
import  jwt  from "jsonwebtoken";
import dotenv from 'dotenv';
const app = express()
app.use(express.json());
dotenv.config();
const port = 3000

app.post('/login', (req,res)=>
{
  //authenticate users
  const username =req.body.username;
  const user ={name : username}
  const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET);
  res.json({accessToken:accessToken});

})
app.get('/dashboard',authenticateToken,(req,res)=>{
console.log('hi i am dashboard')
})
//middleware to verify token
function authenticateToken(req,res,next)
{
  const authHeader= req.headers['authorization'];
  console.log(authHeader)
  const token = authHeader && authHeader.split(' ')[1];
  console.log(token)
  const token2 = authHeader && authHeader.split(' ')[0];
  console.log(token2)
  if(token==null)
  {
    return res.sendStatus(401)
  }
   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
    if(err)
    {
      console.log(token)
      return res.sendStatus(403)
    }
    req.user=user;
    next();
   })
}




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;