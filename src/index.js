const express=require('express');
const d = require('dotenv')
d.config();
const app=express();


app.get('/',(req,res)=>{
    console.log("/home called")
    res.json({msg:'hello client',name:'Abhishek',lastname:'SINGH'});
  
})



app.listen(process.env.PORT,()=>{
    console.log('server started at:',process.env.PORT)
    console.log("server started by the user",process.env.NAME)
})