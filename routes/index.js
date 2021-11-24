var express = require('express');
var router = express.Router();
var API_ROUTER = require('./api/api')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use("/api/", API_ROUTER)


module.exports = router;
