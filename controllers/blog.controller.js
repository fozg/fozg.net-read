var prismjs = require('prismjs');

var blogMo = require('../models/blog.model');
var marked = require('marked');
var MarkdownMetadataParser = require('../utils/markdown_metadata_parser');
var getTagColor = require('../utils/get_tag_color');

module.exports = {
  /**
   * Get blog by Slug
   */
  getBlogHTMLBySlug: async (slug) => {
    var result = await blogMo.findOne({slug});
    if (!result) {
      return null;
    } else {
      marked.setOptions({
        renderer: new marked.Renderer(),
        highlight: function(code, lang) {
          const language = prismjs.languages[lang] || 'marked';
          return (prismjs.highlight(code, language))
          // return prismjs.highlight(code, lang)
          // return require('highlight.js').highlightAuto(code).value;
        },
        pedantic: false,
        gfm: true,
        tables: true,
        breaks: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
        xhtml: false
      });
      return {
        ...result._doc, 
        body: marked(result.body), 
        tags: result.tags ? result.tags.trim().split(";").map(o => getTagColor(o.trim())) : null
      };
    }
  },
  getBlogsByUser: async (username) => {
    var result = await blogMo.find({
      createdBy: username,
      published: true
    }).sort([["created", -1]])
    if (!result) {
      return []
    } else {
      return result.map(blog => ({
        title: blog.title, 
        slug: blog.slug,
        public_url: `https://fozg.net/blog/`+ blog.slug,
        created: blog.created,
        lang: blog.lang,
        description: blog.description,
        tags: blog.tags ? blog.tags.trim().split(";").map(o => getTagColor(o.trim())) : null
      }))
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