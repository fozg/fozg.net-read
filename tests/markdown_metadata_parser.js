var _MarkdownParser = require('../utils/markdown_metadata_parser');

var content = `---
title: intro
description: intro fozg.net
isPublish: false
title with space: test test
lang: en
---

# this is header
this is body
`

var parser = new _MarkdownParser(content)
parser.parseIt();


console.log(parser.getMetadata())

console.log('html: ', parser.getHtml())