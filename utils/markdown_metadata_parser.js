var marked = require('marked');
var yamlFront = require('yaml-front-matter');

module.exports = class MarkdownParser {
  constructor(content) {
    this.content = content;
  }

  parseIt () {
    let metadata = yamlFront.loadFront(this.content);
    this.html = marked(metadata.__content);
    this.body = metadata.__content;
    delete metadata.__content;
    this.metadata = metadata;
  }

  getBody () {
    return this.body(); 
  }

  getHtml () {
    return this.html;
  }

  getMetadata () {
    return this.metadata;
  }
}