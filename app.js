const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/bookAPI');

const Book = require('./models/bookModel');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const bookRouter = require('./routes/bookRoutes')(Book);

app.use('/api/books', bookRouter);

app.get('/', (req, res) => {
  res.send('welcome to my API1!');
});

app.listen(port, () => {
  console.log(`Gulp is running my app on PORT: ${port}`);
});
