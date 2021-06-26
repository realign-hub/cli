import { Data } from '../../../common/store';

const superagent = require('superagent');
const md5 = require('crypto-js/md5');
const hex = require('crypto-js/enc-hex');

/**
 * 生成[0,n]区间的随机整数
 * 比如生成[0,100]的闭区间随机整数，getRandomN(100)
 */
const getRandomN = (roundTo = 1) => Math.round(Math.random() * roundTo);

export default async (word = '') => {
  const appKey = await Data.YD_TRANSLATE_APP_KEY.getter();
  const secretKey = await Data.YD_TRANSLATE_SECRET_KEY.getter();

  ///
  // 在get请求中，中文需要进行uri编码
  const salt = getRandomN(1000);
  const sign = md5(appKey + word + salt + secretKey).toString(hex);
  const paramsJson = {
    q: word,
    from: 'auto',
    to: 'auto',
    appKey,
    salt: salt,
    sign: sign
  };

  const res = await superagent.get('http://openapi.youdao.com/api').query(paramsJson);
  return res;
};
