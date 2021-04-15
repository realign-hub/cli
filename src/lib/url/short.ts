const superagent = require('superagent');
const chalk = require('chalk');
import logBox from '../../common/log-box';

export default async (options = {}, cmdOpts: any = {}) => {
  const {
    str = ''
  } = cmdOpts;

  const res = await superagent
    .post('https://api.realign.pro/o/short_url')
    .set('Content-Type', 'application/json')
    .set('x1u-token', 'fae5dc6210e0e1f8b0032485f92695e8')
    .send(JSON.stringify({
      url: str,
    }));
  const logs = [
    `地址：${chalk.green(str)}`,
    '',
    `短链：${chalk.blue(JSON.parse(res.text).data.shortUrl)}`,
  ];
  logBox(logs);
};
