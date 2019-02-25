var tagsColor = require('../consts').tagsColor;

module.exports = function(tag) {
  var tagName=tag.toLowerCase();
  if (tagName in tagsColor) {
    return {
      tagName,
      ...tagsColor[tagName]
    }
  } else {
    return {
      tagName,
      bgColor: 'rgb(93, 160, 161)',
      color: '#fff',
    }
  }
}