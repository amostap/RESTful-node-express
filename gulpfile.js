/* eslint-disable no-console */
const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const chalk = require('chalk');

const jsFiles = ['*.js'];

gulp.task('serve', () => {
  const options = {
    script: 'app.js',
    ext: 'js',
    delayTime: 1,
    ignore: ['./node_modules/**'],
    env: {
      PORT: 3000,
    },
    watch: jsFiles,
  };

  return nodemon(options)
    .on('restart', () => {
      console.log(chalk.blue('Restarting'));
    });
});
