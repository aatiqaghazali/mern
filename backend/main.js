// getting-started.js
import mongoose from "mongoose";
import express from 'express';
import {Feedback} from './modals/feedback.js'
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(express.json());
app.use(cors())

const port = 3000
main().then(()=>{ console.log('connected')})

async function main() {
  //await mongoose.connect('mongodb://localhost:27017/admin').then(()=>console.log('connected'));
  await mongoose.connect(process.env.MONGO_URI);
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/fetchfeedback', async(req,res)=>{
  let data= await  Feedback.find({});
  res.json(data);
})
app.post('/feedback',async (req,res)=>{
    try{
      

     // const 
 //   const feedback= new Feedback({userName:'aatiqa',email:'aatiqa@gmail.com',rating:'5'})
      console.log(req.body)
      const {userName, email , rating} = req.body;
       const feedback= new Feedback({userName, email , rating})

      console.log('level01')

           
            console.log('level0')

     await  feedback.save().then(console.log('feedback saved'));
     console.log('level1')
    res.send()
    console.log('level2')

   }
  catch(error)
  {
    console.log('error encountered saving feedback')

  } 
})

app.put('/updatefeedback/:id',async (req,res)=>{
  try{
  

   // const 
//   const feedback= new Feedback({userName:'aatiqa',email:'aatiqa@gmail.com',rating:'5'})
    console.log(req.params.id)
    const {userName, email , rating} = req.body;
    const id = req.params.id;
    // const feedback= new Feedback({userName, email , rating})

    console.log('level01')

         
          console.log('level0')

   await  Feedback.findByIdAndUpdate(id,{userName, email , rating})
   console.log('level1')
  res.send()
  console.log('level2')

 }
catch(error)
{
  console.log('error encountered saving feedback')

} 
})
app.delete('/deletefeedback/:id',async (req,res)=>{
  try{
  

   // const 
//   const feedback= new Feedback({userName:'aatiqa',email:'aatiqa@gmail.com',rating:'5'})
    const id = req.params.id;
    // const feedback= new Feedback({userName, email , rating})

    console.log('level01')

         
          console.log('level0')
          await Feedback.findByIdAndDelete(id)

  
   console.log('level1')
  res.send()
  console.log('level2')

 }
catch(error)
{
  console.log('error encountered saving feedback')

} 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

export default app;