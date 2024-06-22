//using express router
//use is not a router, and it is applied to middleware
//get, post are router methods!

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


//check routes/admin.js for routes!

app.listen(1234);