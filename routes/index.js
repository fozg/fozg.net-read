var express = require('express');
var router = express.Router();

router.get('/blog', require('./blog'));
router.get('/blog/:slug', require('./blog-slug'));

module.exports = router;
