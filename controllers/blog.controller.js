var blogMo = require('../models/blog.model');
var marked = require('marked');

module.exports = {
  /**
   * Get blog by Slug
   */
  getBlogHTMLBySlug: async (slug) => {
    var result = await blogMo.findOne({slug});
    if (!result) {
      return null;
    } else {
      return {...result._doc, body: marked(result.body)};
    }
  },

}