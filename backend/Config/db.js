const mongoose=require("mongoose");
const MONGO_URL='mongodb://localhost/API-Sentinel';

async function connectDb() {

    try{

        await mongoose.connect(MONGO_URL);
        console.log("Successfully connected to mongodb")
    }catch(err){

        console.log("Error in connecting with mongo db",err);
    }
    
}

module.exports=connectDb;