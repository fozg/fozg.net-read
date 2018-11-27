const mongoose = require('mongoose');

const Blog = mongoose.model('Blog', { 
  name: String,
  createdBy: mongoose.Schema.Types.ObjectId,
  title: String,
  descrition: String,
  body: String,
  hashtag: String,
  created: Date,
  updated: Date
});

