/* eslint-disable no-console */
const mongodb = require('mongodb').MongoClient;
const chalk = require('chalk');

const URL = 'mongodb://localhost:27017/bookAPI';

// mock data
const books = [
  {
    author: 'Alex Clare',
    title: 'Node',
    genre: 'Build custom Node.js projects',
    read: false,
  },
  {
    author: 'Alex Clare',
    title: 'Node',
    genre: 'Build custom Node.js projects',
    read: false,
  },
  {
    author: 'Alex Clare',
    title: 'Node',
    genre: 'Build custom Node.js projects',
    read: false,
  },
  {
    author: 'Alex Clare',
    title: 'Node',
    genre: 'Build custom Node.js projects',
    read: false,
  },
];

mongodb.connect(URL, (err, db) => {
  const booksCollection = db.collection('bookAPI');

  const practiseP = new Promise((resolve, reject) => {
    booksCollection.insertMany(books, (err, results) => {
      resolve(results);
    });
  });

  Promise.all([practiseP])
    .then(() => {
      db.close();
      console.log(chalk.yellow('Success :)'));
    });
});
