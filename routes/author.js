var express = require('express');
var router = express.Router();


/* GET author page. */
router.get('/author', function(req, res, next) {
  res.render('author');
});


module.exports = router;
