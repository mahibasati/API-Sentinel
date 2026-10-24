const express=require("express");
const router=express.Router();
const {healthTest}=require("../Controllers/apiHealthController.js");

router.get("/",healthTest);

module.exports=router;