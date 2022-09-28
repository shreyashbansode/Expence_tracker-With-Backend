const express = require('express')
const app = express();
const cors = require('cors');
const conn = require('./db');



app.use(express.json());
app.use(cors());
app.use('/user',require('./route/user'))
 
conn.connection.on('connected',(err)=>{

   if(err){
    console.error(err)
   }else{
    console.log('connected to mongodb');
   }

})

















app.listen(3232,()=>{
    console.log('server is conneted')
})