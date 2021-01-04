const chalk = require('chalk');
const clipboardy = require('clipboardy');
const logBox = binRequire('common/log-box');

const BaiDu = binRequire('lib/translate/baidu/baidu');
const YouDao = binRequire('lib/translate/youdao/youdao');

const TransMap = {
  bd: {
    title: '百度翻译',
    engine: BaiDu
  },
  yd: {
    title: '有道翻译',
    engine: YouDao,
  },
};

module.exports = async (options = {}, cmdOpts = {}) => {
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
      `结果：${dst} ${chalk.black.bgGreen('[已复制]')}`,
    ];
  }

  logBox(logs);
};