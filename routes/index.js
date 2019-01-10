var express = require('express');
var router = express.Router();

console.log('env', process.env.NODE_ENV)

router.get('/blog', require('./blog'));
router.get('/blog/:slug', require('./blog-slug'));

module.exports = router;
