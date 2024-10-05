const express = require("express");

const app = express();

app.use(express.json()) //this will handle json data coming to backend

app.get('/', (req,res)=>{
    res.send("Hello World!!");
})

app.get('/bhaskar', (req,res)=>{
    res.send("This is bhaskar!!");
})

app.get('/mahesh', (req,res)=>{
    res.send("This is mahesh!!");
})

app.post('/data', (req,res)=>{
    const info = req.body;
    console.log(info);
    res.send("Success!!!");
})

app.listen(3000, ()=>{
    console.log("Server is running....")
});