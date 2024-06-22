//To use express module
const express = require('express');
const http = require('http');

//old method to create server:

// const server = http.createServer((req,res)=>{  
//     console.log(res);
// })

//new method with express!
//How to use it?
//this RHS express func gives an obj to that app variable.
const app = express();

app.use((req,res,next)=>{
    console.log('First Middleware!');
    next();
})

//next() used to make request move through next middleware!
app.use((req,res,next)=>{
    console.log('Second Middleware!');
    next();
})
app.use((req,res,next)=>{
    console.log('Third Middleware!');
    res.send('<h1>Hello from Express!</h1>');
})

const server = http.createServer(app);
server.listen(1234)