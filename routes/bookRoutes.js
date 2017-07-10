const express = require('express');

const routes = (Book) => {
  const bookRouter = express.Router();
  const bookController = require('../controllers/bookController')(Book);

  bookRouter.route('/')
    .post(bookController.setBook)
    .get(bookController.getBooks);

  bookRouter.route('/:bookId')
    .get(bookController.getBook);

  return bookRouter;
};

module.exports = routes;
