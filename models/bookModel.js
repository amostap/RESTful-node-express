const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookModel = new Schema({
  title: {
    default: 'test',
    type: String,
  },
  author: {
    default: 'test',
    type: String,
  },
  genre: {
    default: 'test',
    type: String,
  },
  read: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('book', bookModel);
