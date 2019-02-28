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
      res.render('blogdetail', {
        content: blog.body, 
        title: blog.title, 
        author: blog.author, 
        description: blog.description,
        tags: blog.tags,
        slug: blog.slug,
        created: new Date(blog.created).getTime(),
        cover: blog.cover
      })
    } else {
      res.status(404).send('Not found')
    }
  });
}

module.exports = blog;
