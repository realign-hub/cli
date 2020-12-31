const chalk = require('chalk');
const logBox = require('./../common/log-box');
const isNormal = (v = '') => v && v.indexOf('-alpha') === -1 && v.indexOf('-beta') === -1;

module.exports = (options = {}) => {
  const {
    pkg = {},
  } = options;
  const {
    name = '',
    version = '',
  } = pkg;
  const c = isNormal(version) ? 'blue' : 'yellow';
  const logs = [
    `${chalk.blue(name)} ${chalk.yellow('version as follow:')}`,
    '',
    chalk[c](`v${version}`),
  ];
  logBox(logs);
};