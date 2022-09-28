import React from "react";
import {Routes ,Route} from 'react-router-dom';
import App from "../App"
import DeleteUser  from './DeleteUser'
import Edituser from './Edituser'


const Routing = ()=>{

 return(
    <>
    <Routes>

        <Route exact path = "/" element = {<App/>}></Route>
        <Route exact path = "/deleteuser/:userID" element = {<DeleteUser/>} ></Route>
        <Route exact path = "/edituser/:userID" element = {<Edituser/>} ></Route>

    </Routes>
    
    
    
    </>
 )

}

export default Routing;