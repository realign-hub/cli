const chalk = require('chalk');
const clipboardy = require('clipboardy');
import logBox from '../common/log-box';
import date from '../common/date';
import TIPS from '../common/tips';

export default (options = {}, cmdOpts: any = {}) => {
  const {
    str = '',
  } = cmdOpts;
  const T: any = {
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
    `${chalk.blue('时间戳ms')}  ${T.ts} ${TIPS.copied}`,
  ];
  logBox(logs);
};
