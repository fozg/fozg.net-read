var express = require('express')

var router = express.Router();

router.get('/',  function(req, res, next) {
  res.json({mess:'welcome to api'})
})

router.get('/v1/blog/', require('./v1/blog~slug'))
router.get('/v1/blog/:slug', require('./v1/blog~slug'))
router.get('/v1/blogs/:username', require('./v1/blogs_user'))


module.exports = router;