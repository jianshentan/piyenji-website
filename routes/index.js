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

router.get('/download', function(req, res, next) {
  res.redirect('https://itunes.apple.com/us/app/piyenji-sticker-gallery/id1233637881?mt=8')
});


module.exports = router;
