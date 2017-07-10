/* eslint-disable no-console */
const bookController = (Book) => {
  const setBook = (req, res) => {
    const book = new Book(req.body);
    book.save();
    res.status(201).send(book);
  };

  const getBooks = (req, res) => {
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        res.status(500).send(err);
      } else {
        const returnBooks = [];
        books.forEach((element, index, array) => {
          const newBook = element.toJSON();
          newBook.links = {};
          newBook.links.self = `http://${req.headers.host}/api/books/${newBook._id}`
          returnBooks.push(newBook);
        });
        res.json(returnBooks);
      }
    });
  };

  const findBookMiddleware = (req, res, next) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        res.status(500).send(err);
      } else if (book) {
        req.book = book;
        next();
      } else {
        res.status(404).send('no book found');
      }
    });
  };

  const getBook = (req, res) => {
    const returnBook = req.book.toJSON();
    returnBook.links = {};
    const link = `http://${req.headers.host}/api/books/?genre=${returnBook.genre}`;
    returnBook.links.FilterByThisGenre = link.replace(' ', '%20');
    res.json(returnBook);
  };

  const putBook = (req, res) => {
    req.book.title = req.body.title;
    req.book.author = req.body.author;
    req.book.genre = req.body.genre;
    req.book.read = req.body.read;
    req.book.save((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(req.book);
      }
    });
  };

  const patchBook = (req, res) => {
    if (req.body._id) {
      delete req.body._id
    }
    for (const i in req.body) {
      req.book[i] = req.body[i];
    }

    req.book.save((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(req.book);
      }
    });
  };

  const deleteBook = (req, res) => {
    req.book.remove((err) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.sendStatus(204);
      }
    });
  };

  return {
    deleteBook,
    getBooks,
    setBook,
    getBook,
    putBook,
    patchBook,
    findBookMiddleware,
  };
};

module.exports = bookController;
