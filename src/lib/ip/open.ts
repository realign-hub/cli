const superagent = require('superagent');

export default async () => {
  const url = 'https://apis.map.qq.com/ws/location/v1/ip';
  const params = {
    key: '3BFBZ-ZKD3X-LW54A-ZT76D-E7AHO-4RBD5',
  };

  const res = await superagent.get(url).query(params);
  const result = res.body.result || {};
  return {
    公网: result.ip || 'Unknown',
  };
};
