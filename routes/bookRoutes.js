const express = require('express');

const routes = (Book) => {
  const bookRouter = express.Router();
  const bookController = require('../controllers/bookController')(Book);

  bookRouter.route('/')
    .post(bookController.setBook)
    .get(bookController.getBooks);

  bookRouter.use('/:bookId', bookController.findBookMiddleware);

  bookRouter.route('/:bookId')
    .get(bookController.getBook)
    .put(bookController.putBook)
    .patch(bookController.patchBook)
    .delete(bookController.deleteBook);

  return bookRouter;
};

module.exports = routes;
