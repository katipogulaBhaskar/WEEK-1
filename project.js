const express = require("express");

const app = express()

app.use(express.json());

let employees = [];

app.get('/employees', (req,res)=>{
    res.status(200).json(employees);

})

app.get('/employees/:id', (req,res)=>{
    const employee = employees.find(emp => emp.id === parseInt(req.params.id));

    if(!employee){
        return res.status(404).send('Employee not found');    
    }
    res.status(200).json(employee);
})

app.post('/employees', (req,res)=>{
    const { name, position, department} = req.body;

    if(!name || !position || !department){
        return res.status(400).json("Employee name, position, department required");
    }

    const newEmployee = {
        id : employees.length+1,
        name,
        position,
        department
    };

    employees.push(newEmployee);
    res.status(201).json(newEmployee);
})

app.put('/employees/:id', (req,res)=>{
    const employeeId = parseInt(req.params.id);
    const employee = employees.find(emp => emp.id === employeeId);

    if(!employee){
        return res.status(404).send('Employee not found');    
    }

    const {name, position, department} = req.body;

    if(name) employee.name = name ;
    if(position) employee.position = position ;
    if(department) employee.department = department ;

    res.status(200).json(employee);
})

app.delete('/employees/:id', (req,res)=>{
    const employeeIndex = employees.findIndex(emp => emp.id === parseInt(req.params.id));

    if(employeeIndex === -1){
        return res.status(404).send("Employee Not Found");
    }

    const deletedEmployee = employees.splice(employeeIndex,1);
    res.status(200).json(deletedEmployee);
})

app.listen(5000, ()=>{
    console.log("Server is running........")
})