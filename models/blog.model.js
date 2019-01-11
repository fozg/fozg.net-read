const mongoose = require('mongoose');

const Blog = mongoose.model('Blog', { 
  name: String,
  createdBy: String,
  title: String,
  descrition: String,
  body: String,
  tags: String,
  created: Date,
  updated: Date,
  published: Boolean,
  slug: String,
  format: String, // md || draft
});

module.exports = Blog;
