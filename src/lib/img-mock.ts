import { IF_CmdItemOptions } from '@/typings';

import logBox from '../common/log-box';
import { getChalk } from '../common/function-help';

export default (options: IF_CmdItemOptions, cmdOpts: any = {}) => {
  const {
    str = ''
  } = cmdOpts;
  const chalk = getChalk(options);
  const RE = /(?<w>[0-9]+)x(?<h>[0-9]+)_(?<bg>[#a-zA-Z0-9]+)/;
  const {
    w,
    h,
    bg,
  } = ((str).match(RE) || {}).groups || {};
  const url = `https://api.realign.pro/img-view/p/${w}x${h}?bg=${encodeURIComponent(bg)}`;
  const LBO: any = {
    模拟图片地址: chalk.green(url),
  };
  logBox(options, LBO);
};
