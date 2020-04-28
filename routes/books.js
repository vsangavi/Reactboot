var express = require('express');
var router = express.Router();

/* GET users listing. */
/*/router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
router.get('/search', function(req, res, next) {
  res.status(200).json({id:1,name:"Harry Potter",author:"J.K.Rowling"})
});

module.exports = router;


