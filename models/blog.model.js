const mongoose = require('mongoose');

const Blog = mongoose.model('Blog', { 
  name: String,
  createdBy: String,
  title: String,
  description: String,
  body: String,
  tags: String,
  created: Date,
  updated: Date,
  published: Boolean,
  slug: String,
  format: String, // md || draft,
  lang: String
});

module.exports = Blog;
