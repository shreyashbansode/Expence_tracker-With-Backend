import react,{useState} from 'react';
import "./Edituser.css"
import { useEffect } from 'react';
import axios from 'axios';

import { useNavigate, useParams } from 'react-router-dom';



const Edituser = ()=>{

    const navigate = useNavigate();

const {userID} = useParams();
console.log(userID);


const [item,setTitle]=useState("");
const [Number,setAmount]=useState();
const [myDate,setDate]=useState(new Date());

const [updatedata , setUpdatedata] = useState();

console.log(updatedata);
// console.log(item);
// console.log(Number);
// console.log(myDate);

// console.log(title);

useEffect(()=>{

   axios.get(`http://localhost:3232/user/${userID}`)
   .then((res)=>{
            const rawData = res.data[0];
            console.log(rawData);

            // setUpdatedata(rawData);


            setTitle(rawData.item);
            setAmount(rawData.price);

            console.log(rawData.item);
            console.log(rawData.price);
            console.log(new Date(rawData.date));

   }).catch((err)=>{
    console.log(err);
   })


  


},[])

const updateHandler=(e)=>{

    e.preventDefault();

      const  myobj = {
            item,
            price:Number,
            date:myDate
        }

        

        axios.put(`http://localhost:3232/user/${userID}`,myobj)
        .then(()=>{
                    alert("data update successfully")
                    navigate('/');
        }).catch((err)=>{
            console.log(err);
            alert("data not updated")
        })
   }




    return(
        <>
        <form onSubmit = {updateHandler}>
     <div className="outer-main">
        <div className="outer-box1">

        <div className="left"> <label htmlFor="title">Title</label>
        <input type="text" name="title" onChange = {(e)=>setTitle(e.target.value)} value={item} required/> </div>



        <div className="right"> <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" onChange = {(e)=>setAmount(e.target.value) }  value={Number} required />  <br></br></div>


        <div className="left"> <label htmlFor="date">Date</label>
        <input type="date" name="date" onChange = {(e)=>setDate(e.target.value) }  value={myDate} />
     <br></br></div>

     
        <div className="r">  <input  type="submit" value="Add Expense" /></div>
       
    </div>
 </div>
 </form>
        </>
    )
}


export default Edituser;