const express=require("express");
const app=express();
const healthRouter=require("./Routes/apiHealthRoute.js")
require("dotenv").config();
const cors=require("cors");
app.use(express.json());
app.use(cors());
const connectDb=require("./Config/db.js");

connectDb();

app.use("/api/health",healthRouter);

// app.get("/",(req,res)=>{
//     res.send("Home page");
// })




app.listen(process.env.PORT,()=>{
    console.log("Listening to port number",process.env.PORT);
})