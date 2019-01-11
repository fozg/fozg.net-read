/**
 * GET blogs by user
 */

var blogController = require('../../controllers/blog.controller');

module.exports = async function (req, res, next) {
  let query = req.query;

  if (!query.username) {
    return res.status(404).json({error: 'Please spec user'})
  }

  let blogs = await blogController.getBlogsByUser(query.username);
  console.log(blogs)
  res.json(blogs);
}