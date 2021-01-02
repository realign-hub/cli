const chalk = require('chalk');
const clipboardy = require('clipboardy');
const logBox = binRequire('common/log-box');
const date = binRequire('common/date');

module.exports = (options = {}, cmdOpts = {}) => {
  const {
    str = '',
  } = cmdOpts;
  const T = {
    date: null,
    str: '',
    ts: '',
  };

  T.date = str === 'now' ? new Date() : new Date(str);
  T.str = date.format(T.date);
  T.ts = T.date.getTime();

  clipboardy.writeSync(`${T.ts}`);
  const logs = [
    `${chalk.blue('时间对象')}  ${T.date}`,
    `${chalk.blue('格式化串')}  ${T.str}`,
    `${chalk.blue('时间戳ms')}  ${T.ts} ${chalk.green('[已复制]')}`,
  ];
  logBox(logs);
};