/**
 * GET blog via slug or id
 */
var fcorejs = require('fcorejs');

var blogController = require('../../controllers/blog.controller');

module.exports = async function (req, res, next) {
  console.log(req.query)
  let query = req.query;

  if (!query.slug) {
    return res.status(404).json({error: 'Please spec a blog'})
  }

  let blog = await blogController.getBlogHTMLBySlug(query.slug);
  let author = await new fcorejs(true).core.userProfile.findById(1);

  res.json({...blog, author})
}