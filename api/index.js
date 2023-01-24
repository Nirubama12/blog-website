//creating express server
const express = require("express");
const app = express();

app.use("/niru",(req,res)=>{
    console.log("hey this is my url")
})
app.listen("5000", ()=>{
    console.log("Backend is running.")
})