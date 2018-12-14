var blogController = require('../controllers/blog.controller');


function blog (req, res, next) {

  try {
    var slug = req.params.slug;
  } catch(e) {
    res.send('Something went wrong')
  }

  blogController.getBlogHTMLBySlug(slug).then(blog => {
    // console.log({blog})
    if (blog) {
      res.render('blog', {content: blog.body, title: blog.title, author: blog.author })
    } else {
      res.status(404).send('Not found')
    }
  });
}

module.exports = blog;
