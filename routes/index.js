require('dotenv').config();
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.mobile == true) {
    res.render('index', { mobile: "true" });
  } else {
    res.render('index', { mobile: "false" });
  }
});

router.get('/terms', function(req, res, next) {
  if (req.mobile == true) {
    res.render('terms', { mobile: "true" });
  } else {
    res.render('terms', { mobile: "false" });
  }
});

module.exports = router;
