import { IF_CmdItemOptions } from '@/typings';

const clipboardy = require('clipboardy');
import logBox from '../common/log-box';
import { getChalk } from '../common/function-help';
import date from '../common/date';
import TIPS from '../common/tips';

export default (options: IF_CmdItemOptions, cmdOpts: any = {}) => {
  const {
    str = '',
  } = cmdOpts;
  const chalk = getChalk(options);
  const T: any = {
    date: null,
    str: '',
    ts: '',
  };

  T.date = str === 'now' ? new Date() : new Date(str);
  T.str = date.format(T.date);
  T.ts = T.date.getTime();

  clipboardy.writeSync(`${T.ts}`);
  const LBO: any = {};
  LBO[chalk.blue('时间对象')] = T.date;
  LBO[chalk.blue('格式化串')] =T.str;
  LBO[chalk.blue('时间戳ms')] = T.ts;

  logBox(options, LBO, TIPS.copied);
};
