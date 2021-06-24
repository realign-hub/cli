import { IF_CmdItemOptions } from '@/typings';

const superagent = require('superagent');
import logBox from '../../common/log-box';
import { getChalk } from '../../common/function-help';

export default async (options: IF_CmdItemOptions, cmdOpts: any = {}) => {
  const {
    str = ''
  } = cmdOpts;

  const chalk = getChalk(options);

  const res = await superagent
    .post('https://api.realign.pro/o/short_url')
    .set('Content-Type', 'application/json')
    .set('x1u-token', 'fae5dc6210e0e1f8b0032485f92695e8')
    .send(JSON.stringify({
      url: str,
    }));
  const LBO = {
    地址: chalk.green(str),
    短链: chalk.blue(JSON.parse(res.text).data.shortUrl),
  };
  logBox(options, LBO);
};
