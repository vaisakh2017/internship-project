var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/alpha', function(req, res, next) {
  res.render('alpha');
});
router.get('/signs', function(req, res, next) {
  res.render('signs');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
module.exports = router;
