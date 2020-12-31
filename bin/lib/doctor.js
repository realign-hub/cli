const chalk = require('chalk');
const logBox = require('./../common/log-box');

module.exports = (options = {}) => {
  const {
    pkg = {},
  } = options;
  const {
    name = '',
  } = pkg;
  const errLogs = [
    `${chalk.blue(name)} ${chalk.yellow('has no doctor now.')}`,
    '',
    `It will come soon.`,
  ];
  logBox(errLogs);
};