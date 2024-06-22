//Parsing data from Request

const express = require('express');
const app = express();



//use body-parser
const bodyParser = require('body-parser');
//use it!
//to allow bodyParser to use query string, we use extended:true.
// app.use(bodyParser.urlencoded({extended:true}));

//Thus data is parsed, readable output is received.
app.use(bodyParser.urlencoded());



app.use('/add-product',(req,res,next)=>{
    res.send('<h1>Add Product</h1><form action="/store-product" method="POST"><input type="text" name="title"/><input type="submit" value="submit"/>');
})
app.use('/store-product',(req,res,next)=>{
    console.log("Form data: ",req.body);
    res.send('<b>Product submitted!</b>');
})

//old code:
//without body-parser, we only get undefined form data!
// app.use('/store-product',(req,res,next)=>{
//     console.log("Form data: ",req.body);
// })

app.listen(1234);