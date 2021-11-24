var express = require('express');
var router = express.Router();
var PROFILE_ROUTER = require('./ProfileRouter/index')

router.use("/v0/", PROFILE_ROUTER)

module.exports = router;
