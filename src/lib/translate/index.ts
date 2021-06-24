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
  // 删除回车换行
  const strNoRN = str.replace(/[\r\n]/g, '');
  const res = await enginePro(strNoRN);
  const {
    err = '',
    data: {
      src = '',
      dst = '',
    },
  } = res;
  const LBO: any = {};
  if (err) {
    LBO[`${chalk.red('错误')}`] = err;
  } else {
    clipboardy.writeSync(`${dst}`);
    LBO['引擎'] = chalk.green(engineTitle);
    LBO['查询'] = chalk.blue(src);
    LBO['结果'] = dst;
  }

  logBox(options, LBO, TIPS.copied);
};
