const express = require('express');

//to get path of file, a core module
//path will differ for every os
const path = require('path');

//path.js
const rootDir = require('../utils/path');

const router = express.Router();

router.get('/',(req,res,next)=>{
    //sendFile() -> shares a file as response
    //__dirname=> E:/<somepath>/express JS/routes + views (folder) + filename
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
    res.sendFile(path.join(rootDir,'views','shop.html'));

})

module.exports = router;