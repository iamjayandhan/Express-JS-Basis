//Filtering Paths/ URL Prefix
//Returning 404 page/ Using Dirname variable
//Using Helper file for Root path
//Styling html files
//Serving static files

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());

const path = require('path');


//import routers!
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


//before checking for routes, it should check for static files
//to use static css files
app.use(express.static(path.join(__dirname,'public')));





//to make app recognize routes
//default url '/admin' added with adminRoutes
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})




//check routes/admin.js for routes!

app.listen(1234);