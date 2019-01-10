var express = require('express');
var router = express.Router();

let hostName = process.env.NODE_ENV === 'production' ? '/' : '/blog'

router.get(hostName, require('./blog'));
router.get(hostName + '/:slug', require('./blog-slug'));

module.exports = router;
