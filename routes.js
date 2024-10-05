const express = require("express");
const router = express.Router();

router.get('/hello', (req,res)=>{
    res.send("Hello Your GET request was successful");
})

router.post('/submit', (req,res)=>{
    const { name }  = req.body;
    
    if(!name){
        return res.status(400).send("Name is required");
    }
    res.send(`Hello, ${name}! Your POST request was successful`);
})

module.exports = router;

