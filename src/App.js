import React ,{useState,useEffect} from 'react';
import './App.css';
import Expenses from "./components/Expenses";
import Expenseform from './components/Expenseform';
import axios from 'axios'


function App() {
  
  const [expensedata , setExpenceData] =useState([]);

  useEffect(()=>{
  axios.get("http://localhost:3232/user")
  .then(async(res)=>{
       const rawData = await res.data;
       setExpenceData(rawData);
  }).catch((err)=>{
    console.log(err);
  })

  },[])

  console.log(expensedata);

  return(
 <>
 <div className="most_outer">
  <Expenseform/>
 <Expenses expensedata={expensedata}/>
 </div>
 </>

);
}

export default App;
