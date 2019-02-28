var express = require('express');
var router = express.Router();

console.log('env', process.env.NODE_ENV)

router.get('/blog', require('./blog'));
router.get("/blog/t/", function(req, res) {res.redirect('/blog')})
router.get('/blog/:slug', require('./blog-slug'));
router.get("/blog/t/:tagName", require('./tag'))

module.exports = router;
