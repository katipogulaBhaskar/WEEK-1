const express = require("express");
const dotenv = require("dotenv");

const app = express();

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 2000;

app.get('/', (req,res)=>{
    res.send("Hello World!!");
})

app.listen(port, ()=>{
    console.log("server running task_14")
})
