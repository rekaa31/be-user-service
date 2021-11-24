var express = require('express');
var router = express.Router();
var PROFILE = require('./profile')

router.use("/profile", PROFILE)

module.exports = router;
