const express = require('express');
const path = require('path');

//router in express
//router is mini express js object!
//contains router functions - get,post...!
const router = express.Router();

//path.js
const rootDir = require('../utils/path');

//'get' to fetch instead of 'use'
router.get('/add-product',(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'));

    //using utils/path.js
    res.sendFile(path.join(rootDir,'views','add-product.html'));
})

router.post('/store-product',(req,res,next)=>{
    console.log("Form data: ",req.body);
    res.send('<b>Product submitted!</b>');
})

module.exports = router;