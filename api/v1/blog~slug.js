/**
 * GET blog via slug or id
 */
var blogController = require('../../controllers/blog.controller');

module.exports = async function (req, res, next) {
  console.log(req.query)
  let query = req.query;

  if (!query.slug) {
    return res.status(404).json({error: 'Please spec a blog'})
  }

  let blog = await blogController.getBlogHTMLBySlug(query.slug);
  res.json(blog)
}