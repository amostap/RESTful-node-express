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
        res.json(books);
      }
    });
  };

  const getBook = (req, res) => {
    Book.findById(req.params.bookId, (err, book) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json(book);
      }
    });
  };

  return {
    getBooks,
    setBook,
    getBook,
  };
};

module.exports = bookController;
