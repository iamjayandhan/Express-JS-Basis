const express = require('express');

//router in express
//router is mini express js object!
//contains router functions - get,post...!
const router = express.Router();

//'get' to fetch instead of 'use'
router.get('/add-product',(req,res,next)=>{
    res.send('<h1>Add Product</h1><form action="/store-product" method="POST"><input type="text" name="title"/><input type="submit" value="submit"/>');
})

router.post('/store-product',(req,res,next)=>{
    console.log("Form data: ",req.body);
    res.send('<b>Product submitted!</b>');
})

module.exports = router;