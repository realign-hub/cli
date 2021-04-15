const md5 = require('crypto-js/md5');
const superagent = require('superagent');

export default async (word = '') => {
  const q = word;
  const salt = Math.random();
  const appid = '20210104000662827';
  const appsecret = 'AX1Nw_KgEvC0QiqTejsa';
  const sign = md5(appid + word + salt + appsecret).toString();

  const options = {
    baseUrl: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
    data: {
      q,
      from: 'auto',
      to: 'auto',
      salt,
      appid,
      sign
    }
  };
  const {
    baseUrl,
    data,
  } = options;
  const res = await superagent.get(baseUrl).query(data);
  return res;
};
