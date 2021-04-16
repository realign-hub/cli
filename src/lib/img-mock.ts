const chalk = require('chalk');
import logBox from '../common/log-box';

export default (options = {}, cmdOpts: any = {}) => {
  const {
    str = ''
  } = cmdOpts;
  const RE = /(?<w>[0-9]+)x(?<h>[0-9]+)_(?<bg>[#a-zA-Z0-9]+)/;
  const {
    w,
    h,
    bg,
  } = ((str).match(RE) || {}).groups || {};
  console.log(w, h, bg);
  const url = `https://api.realign.pro/img-view/p/${w}x${w}?bg=${encodeURIComponent(bg)}`;
  const logs = [
    `\n模拟图片地址 ${chalk.green(url)}\n`,
  ];
  logBox(logs);
};
