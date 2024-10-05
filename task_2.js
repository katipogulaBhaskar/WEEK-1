const express = require("express");

const app = express();

app.get('/goodbye', (req,res)=>{
    res.send("Goodbye, Express!")
})

app.listen(3000, ()=>{
    console.log("Server is running.....task_2")
})