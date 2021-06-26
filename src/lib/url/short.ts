import { IF_CmdItemOptions } from '@/typings';

const superagent = require('superagent');
import logBox from '../../common/log-box';
import { getChalk } from '../../common/function-help';
import { shortUrlTokenGetter } from '../../common/store';
import {
  LEVEL_GETTER_ERROR,
} from '../../common/const';

export default async (options: IF_CmdItemOptions, cmdOpts: any = {}) => {
  const {
    str = ''
  } = cmdOpts;
  const chalk = getChalk(options);
  const LBOAddTipsSetToken = (X: any) => {
    X[`${chalk.blue('使用下面的命令来设置或者更新 token：')}`] = '';
    X[`${chalk.green('$')} re store short_url_token [Your token]`] = '';
  };
  let LBO: any = {};

  try {
    const token = await shortUrlTokenGetter();
    const res = await superagent
      .post('https://api.realign.pro/o/short_url')
      .set('Content-Type', 'application/json')
      .set('x1u-token', token)
      .send(JSON.stringify({
        url: str,
      }));
    const {
      code = 200,
      msg = '',
      data = {},
    } = JSON.parse(res.text);
    if(code === 200) {
      LBO = {
        地址: chalk.green(str),
        短链: chalk.blue(data.shortUrl),
      };
    } else {
      LBO = {
        错误: chalk.red(msg),
      };
      LBOAddTipsSetToken(LBO);
    }
    logBox(options, LBO);
  } catch(err) {
    if(err.message === LEVEL_GETTER_ERROR) {
      LBO[`${chalk.red('短链 token 缺失！')}`] = '';
      LBOAddTipsSetToken(LBO);
      logBox(options, LBO);
    }
  }
};
