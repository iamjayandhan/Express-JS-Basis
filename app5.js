//Handling only POST requests
//only if method is post, then execute that middleware ..that's our task

const express = require('express');
const app = express();

//use body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

app.use('/add-product',(req,res,next)=>{
    res.send('<h1>Add Product</h1><form action="/store-product" method="POST"><input type="text" name="title"/><input type="submit" value="submit"/>');
})
//only works when req is POST method.
app.post('/store-product',(req,res,next)=>{
    console.log("Form data: ",req.body);
    res.send('<b>Product submitted!</b>');
})

//app.
//req methods=> get,post,put,patch,delete...

app.listen(1234);