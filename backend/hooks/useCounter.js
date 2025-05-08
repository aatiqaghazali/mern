import {useState, useEffect} from 'react'
export default useCounter()
{
    const [ count , setCount]= useState(0);
    useEffect(()=>{
      setCount(count+1);
    },[])
    return count;
}