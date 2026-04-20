const express = require('express');
const { error } = require('node:console');
const app = express();

app.use(express.json());

// Logger
app.use((req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

// array to save data
let stds =[
    {id: 1, name:"Tahany", age: 21 , department:"CS"},
    {id: 2, name:"Doaa", age: 21 , department:"IS"}
]

// Task 1 : GET/Students
app.get('/students',(req,res)=>{
    res.status(200).json(stds);
});

// Task 4 : ADD New Std
app.post('/students', (req, res) => {
    const { name, age, department } = req.body;
    
    if (!name || !department || age <= 15) {
        return res.status(400).json({ error: "Failed" });
    }

    const newStd = {
        id: stds.length ? stds[stds.length - 1].id + 1 : 1,        name,
        age,
        department
    };

    stds.push(newStd);

    res.status(201).json({
        message: "Student Added Successfully",
        student: newStd
    });
});


// Task 3 : Get/students/search
app.get('/students/search', (req, res) => {
    const dept = req.query.department;
    if (!dept) {
        return res.status(400).json({ error: "No Resault" });
    }
    const result = stds.filter(s => s.department === dept);

    res.status(200).json({ students: result });
});


// Task 5 : Update
app.put('/students/:id' , (req,res)=>{
    const id = parseInt(req.params.id);
    const {name , age , department} = req.body;

    const std = stds.find(s=>s.id===id);
    
    if(!std) return res.status(404).json({error : "Not Found"});

    if(name) std.name =name;
    if(age) std.age=age;
    if(department) std.department=department;

    res.status(200).json({
        message : "Update Done"
    });
});

// Task 2 : GET/students/:id
app.get('/students/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    const Student =stds.find(s=>s.id==id);

    if(Student)
    {
        res.status(200).json({student : Student});
    }
    else res.status(404).json ({error : "Not Found"});
});

// Task 6 : Delete 
app.delete('/students/:id',(req,res)=>{
    const id = parseInt(req.params.id);

    const indx = stds.findIndex(s=> s.id === id);

    if(indx === -1) return res.status(404).json({error : "Not Found"});

    stds.splice(indx,1);

    res.status(200).json({
        message : "Delete Is Done"
    });
});

app.listen(3000,()=>{
    console.log("Server Run");
});