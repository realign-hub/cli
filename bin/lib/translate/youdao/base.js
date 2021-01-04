const superagent = require('superagent');
const md5 = require('crypto-js/md5');
const hex = require('crypto-js/enc-hex');

/**
 * 生成[0,n]区间的随机整数
 * 比如生成[0,100]的闭区间随机整数，getRandomN(100)
 */
const getRandomN = (roundTo = 1) => Math.round(Math.random() * roundTo);

module.exports = async (word = '') => {
  const appKey = '57bf0c4858b91aed';
  const secretKey = 'sWHUw3lvieWyeZ1Lc1lDIQVTu84qirOf';

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
  }

  const res = await superagent.get('http://openapi.youdao.com/api').query(paramsJson);
  return res;
};