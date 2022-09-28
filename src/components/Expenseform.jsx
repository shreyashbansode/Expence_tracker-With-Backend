import React from "react";
import "./Expenseform.css";
import {useState} from "react";
import axios from "axios";

const Expenseform =(props) =>{
const [title,setTitle] = useState("");
const [amount ,setAmount] = useState();
const[date , setDate] = useState();
const [viewform ,setViewForm] = useState(false);


const submitHandler =(e)=>{
e.preventDefault();
    const dataobj = {
        id:Math.random(),
        item:title,
        price:amount, 
        date:new Date (date),
    }
    

    console.log(dataobj);


    axios.post("http://localhost:3232/user",dataobj)
    .then(()=>{
        alert("Data Has been added successfully");
        window.location.reload();
    }).catch((err)=>{
        alert("Error: " + err);
    })
    



    setAmount("");
    setTitle("");
    setDate();
    // alert("Data Add Successfully");
    setViewForm(!viewform);



    
}




// console.log(title);
// console.log(amount);
// console.log(date);




    return (

       <>
        <form onSubmit={submitHandler} className={viewform ? 'visibleform' : 'nonvisibleform expenceform' }  >

        <div className="outer-box">

            <div className="left"> <label htmlFor="title">Title</label>
            <input type="text" name="title" onChange={(e) =>setTitle(e.target.value)} value={title} required/> </div>



            <div className="right"> <label htmlFor="amount">Amount</label>
            <input type="number" name="amount" onChange={e => setAmount(e.target.value)} value={amount} required />  <br></br></div>


            <div className="left"> <label htmlFor="date">Date</label>
            <input type="date" name="date" onChange={(e)=>setDate(e.target.value)} value={date} />
         <br></br></div>

         
            <div className="r">  <input  type="submit" value="Add Expense" /></div>
           
        </div>


        </form>
        <div className={viewform ? 'nonvisibleform' : 'visibleform  btn_bx'}>
        <button onClick={(e) =>setViewForm(!viewform)} className={viewform ? 'nonvisibleform' : 'visibleform  addnew_btn'}>Add new Expance</button>
        </div>
       
       </>
    );
}


export default Expenseform;