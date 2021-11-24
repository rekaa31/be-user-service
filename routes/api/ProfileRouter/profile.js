var express = require('express');
var router = express.Router();
var {getProfile} = require('../../../controllers/profileController');

router.get("/", getProfile)

module.exports = router;
