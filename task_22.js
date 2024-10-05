const express = require("express");

const app = express();

app.get('/api/data', (req,res)=>{
    const responseData = {
        message : "Hello",
        author : "Bhaskar",
        age : 20,
        success : true
    }
    res.json(responseData); // res.json() will send the JSON response.
})

app.listen(5000, (req,res)=>{
    console.log("server running.....task_22")
})