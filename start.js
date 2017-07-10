/* eslint-disable no-console */
const chalk = require('chalk');
const open = require('open');

const PORT = process.env.PORT || 3000;

console.log(chalk.green('Starting app in dev mode...'));
open(`http:localhost:${PORT}`);
