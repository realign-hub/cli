import { IF_CmdItemOptions } from '@/typings';

const clipboardy = require('clipboardy');
import logBox from '../../common/log-box';
import { getChalk } from '../../common/function-help';
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

export default async (options: IF_CmdItemOptions, cmdOpts: any = {}) => {
  const {
    str = '',
    engine = 'bd',
  } = cmdOpts;
  const chalk = getChalk(options);
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
  const obj: any = {};
  if (err) {
    obj[`${chalk.red('错误')}`] = err;
  } else {
    clipboardy.writeSync(`${dst}`);
    obj['引擎'] = chalk.green(engineTitle);
    obj['查询'] = chalk.blue(src);
    obj['结果'] = dst;
  }

  logBox(options, obj, TIPS.copied);
};
