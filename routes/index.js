var express = require('express');
var router = express.Router();

// TO GET HOME PAGE (this or app)
router.get('/',function(req,res,next){
  res.render('Home');
});


module.exports = router;
