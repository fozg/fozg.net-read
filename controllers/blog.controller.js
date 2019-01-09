var blogMo = require('../models/blog.model');
var marked = require('marked');
var MarkdownMetadataParser = require('../utils/markdown_metadata_parser')

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
  /**
   * Add blog via md file with prop. File example:
   * 
    ---
      title: intro
      description: intro fozg.net
      isPublish: false
      lang: en
    ---
    .. content
   */
  addBlogViaMarkdownMetadata: async (markdownWithMetadata) => {
    var mdparser = new MarkdownMetadataParser(markdownWithMetadata);
    mdparser.parseIt();
    return blogMo.create({...mdparser.getMetadata(), body: mdparser.getBody() });
  }
}