//404 error

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());


//import routers!
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//to make app recognize routes
app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>404 page not found</h1>');
})

//check routes/admin.js for routes!

app.listen(1234);