const express=require('express')


const apps=require('./calc.js')

const result=apps.add(4,5);
console.log(result);

const app=express();

app.get('/',function(req,res){
    res.send('hello World');
})

app.get('/hello',function(req,res){ // url is hello?id=20
    const id=req.query.id
    res.send("Welcome back"+id)
})

app.get('/hello/:id',function(req,res){ //url is hello/20
    const id=req.params.id
    res.send("Hey Nithish"+id); 
})

 app.listen(9090,function(req,res){
     console.log("Running");
 })