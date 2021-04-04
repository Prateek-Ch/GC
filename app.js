require('dotenv').config();

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
var LocalStrategy = require('passport-local');
var cookieParser = require('cookie-parser');
var session = require('express-session');

//Setting up various routes
var homepage = require('./routes/index');
var about = require('./routes/about');
// var userRoutes = require('./routes/user');
// var blog = require('./routes/blog');
// var services = require('./routes/services');
// var contact = require('./routes/contact');
// var testimonials = require('./routes/testimonials');


const app = express();

// mongoose.connect('mongodb://localhost:27017/paints',{ useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:false});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static("public"));

app.use(session({secret: 'thisismysecret',
resave: false,
saveUninitialized:false,
// store: new MongoStore({ mongooseConnection: mongoose.connection})
}));


app.use(function(req, res, next) {
   req.session.cookie.maxAge = 180 * 60 * 1000; //Change session expiration milliseconds
    next();
});


//TO get this login variable to be used in views
// app.use(function(req,res,next){
//   res.locals.login = req.isAuthenticated();  //Will be either true or false
//   res.locals.session = req.session;
//   next();
// })

app.use('/About',about);
// app.use('/Blog',blog);
// app.use('/Contact',contact);
// app.use('/Services',services);
// app.use('/Testimonials',testimonials);
// app.use('/user',userRoutes);
app.use('/',homepage);


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
