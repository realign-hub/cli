import { Data } from '../../../common/store';

const md5 = require('crypto-js/md5');
const superagent = require('superagent');

export default async (word = '') => {
  try {
    const q = word;
    const salt = Math.random();
    const appid = await Data.BD_TRANSLATE_APPID.getter();
    const appsecret = await Data.BD_TRANSLATE_APPSECRET.getter();
    const sign = md5(`${appid}${word}${salt}${appsecret}`).toString();

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
  } catch(err) {
    //
  }
};
