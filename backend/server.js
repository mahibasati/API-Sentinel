const express=require("express");
const app=express();
require("dotenv").config();
const cors=require("cors");
app.use(express.json());
app.use(cors());


app.get("/",(req,res)=>{
    res.send("Home page");
})


app.listen(process.env.PORT,()=>{
    console.log("Listening to port number",process.env.PORT);
})