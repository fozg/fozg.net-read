var blogMo = require('../models/blog.model');
var marked = require('marked');

function blog (req, res, next) {

  try {
    var slug = req.params.slug;
  } catch(e) {
    res.send('Something went wrong')
  }

  blogMo.findOne({slug}, function (err, result) {
    if (err || !result) {
      res.status(404).send('Not found')
    } else {
      res.render('blog', {content: marked(result.body) })
    }
  })
}

module.exports = blog;
