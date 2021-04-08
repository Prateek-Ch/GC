var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/signup',function(req,res,next){
    res.render('user/signup');
  });
  
  router.post('/signup', passport.authenticate('local.signup',{
    successRedirect: "/user/signin",
    failureRedirect: "/signup",
    failureFlash: true
  }));
  

router.get('/signin',function(req,res,next){
  res.render('user/signin');
});

router.post('/signin', passport.authenticate('local.signin',{
  failureRedirect: "/user/signin",
  failureFlash: true
}),(req,res)=>{
   res.redirect('/blog/compose');
}

);

module.exports = router;

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}

function notLoggedIn(req, res, next){
  if(!req.isAuthenticated()){
    return next();
  }
  res.redirect('/');
}
