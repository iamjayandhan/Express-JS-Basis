//Handling different URLS/Routes!

const express = require('express');
const app = express();


app.use('/second',(req,res,next)=>{
    console.log('Second Middleware');
    res.send('<h1>Second Page</h1>');
})
app.use('/',(req,res,next)=>{
    console.log('First Middleware');
    res.send('<h1>First Page</h1>');
})

//or 

// app.use((req,res,next)=>{
//     console.log('First Middleware');
//     res.send('<h1>First Page</h1>');
// })
//both are same with or without "/" path

app.listen(1234);