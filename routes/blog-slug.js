var blogController = require('../controllers/blog.controller');

function blog (req, res, next) {

  try {
    var slug = req.params.slug;
  } catch(e) {
    res.send('Something went wrong')
  }

  blogController.getBlogHTMLBySlug(slug).then(result => {
    console.log(result)
    if (result) {
      res.render('blog', {content: result })
    } else {
      res.status(404).send('Not found')
    }
  })
}

module.exports = blog;
