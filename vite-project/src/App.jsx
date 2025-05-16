

import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { useEffect, useState } from 'react'
import axios from 'axios'
 

function App() {
  const [username, setUsername]= useState('');
 const [Email, setEmail]= useState('');

 const [rating, setRating]= useState('');
 const [data, setData]= useState([]);
 useEffect(()=>{
    async function fetchData()
   {

    const response = await axios.get('http://localhost:3000/fetchfeedback');
    
    setData(response.data)
    console.log(data);

   }
   fetchData()
  },[])
  async function handleData()
  {
     const userData= {
      "userName": username,
      "email": Email,
      "rating":rating
      };
       console.log (userData);

       const response = await axios.post ('http://localhost:3000/feedback', userData);
       console.log(response);

  }

  async function handleUpdate()
  {
     const userData= {
      "userName": username,
      "email": Email,
      "rating":rating
      };
      const id='681c543cb5d592218787c514';
       console.log (userData);

       const response = await axios.put (`http://localhost:3000/updatefeedback/${id}`, userData);
       console.log(response);

  }
  async function handleDelete()
  {
     
      const id='681c543cb5d592218787c514';
      

       const response = await axios.delete(`http://localhost:3000/deletefeedback/${id}`);
       console.log(response);

  }
   

  

  return (
   
    <>

    <div>
      {
        data.map((item)=>(
             <div key={item._id}>{item}</div>
        )

        )
      }
    </div>
    <input value={Email} onChange={(e)=>{setEmail(e.target.value)}} type='text' placeholder='email'></input>
    <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type='text' placeholder='username'></input>
    <input value={rating} onChange={(e)=>{setRating(e.target.value)}} type='text' placeholder='rating'></input>
    <button onClick={handleData}>save data</button>
    <button onClick={handleUpdate}>update data</button>
    <button onClick={handleDelete}>delete data</button>


    </>
  )
}

export default App
