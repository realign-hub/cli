import { IF_CmdItemOptions } from '@/typings';

const superagent = require('superagent');
import logBox from '../../common/log-box';
import { getChalk } from '../../common/function-help';
import { Data } from '../../common/store';

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
    const token = await Data.SHORT_URL_TOKEN.getter();
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
    //
  }
};
