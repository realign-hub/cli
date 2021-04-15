const chalk = require('chalk');
const clipboardy = require('clipboardy');
import logBox from '../../common/log-box';
import TIPS from '../../common/tips';

import BaiDu from './baidu/baidu';
import YouDao from './youdao/youdao';

const TransMap: any = {
  bd: {
    title: '百度翻译',
    engine: BaiDu
  },
  yd: {
    title: '有道翻译',
    engine: YouDao,
  },
};

export default async (options = {}, cmdOpts: any = {}) => {
  const {
    str = '',
    engine = 'bd',
  } = cmdOpts;
  const enginePro = (TransMap[engine] || {}).engine;
  const engineTitle = (TransMap[engine] || {}).title;

  const res = await enginePro(str);
  const {
    err = '',
    data: {
      src = '',
      dst = '',
    },
  } = res;
  let logs = [];
  if (err) {
    logs = [
      `${chalk.red('错误')}  ${err}`,
    ];
  } else {
    clipboardy.writeSync(`${dst}`);
    logs = [
      `引擎：${chalk.green(engineTitle)}`,
      '',
      `查询：${chalk.blue(src)}`,
      '',
      `结果：${dst} ${TIPS.copied}`,
    ];
  }

  logBox(logs);
};
