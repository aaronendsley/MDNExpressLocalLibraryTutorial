var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  next();
});
router.get('/bob', function(req, res, next){
  res.send('I Am Bob');
} )

module.exports = router;
