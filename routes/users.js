var express = require('express');
var router = express.Router();

/* GET users listing. */
/*/router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/
router.get('/info', function(req, res, next) {
  res.status(200).json({data: "Welcome to Actyv!!"})
});

module.exports = router;
