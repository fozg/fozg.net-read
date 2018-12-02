var blogController = require('../controllers/blog.controller');


function blog (req, res, next) {

  try {
    var slug = req.params.slug;
  } catch(e) {
    res.send('Something went wrong')
  }

  blogController.getBlogHTMLBySlug(slug).then(blog => {
    // console.log(result)
    if (blog) {
      res.render('blog', {content: blog.body })
    } else {
      res.status(404).send('Not found')
    }
  })
}

module.exports = blog;
