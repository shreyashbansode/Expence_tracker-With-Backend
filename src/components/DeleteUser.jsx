import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const DeleteUser = ()=>{

    const navigate = useNavigate();


    const {userID} = useParams()
   
   const Deleteuser = ()=>{
    axios.delete(`http://localhost:3232/user/${userID}`)
    .then(()=>{
        alert('User deleted successfully')
        navigate('/')

    })
    .catch(()=>{
        alert('User not deleted successfully')
    })

    

   }

   const Canceluser = ()=>{
    navigate('/')
}
    return(


        <>
             
            <button class="btn btn-danger" onClick = {Deleteuser}>Delete user</button>
        <button  class="btn btn-secondary btn-sm m-5" onClick = {Canceluser}>Cancel</button>
        

        
        </>
    )
}

export default DeleteUser;