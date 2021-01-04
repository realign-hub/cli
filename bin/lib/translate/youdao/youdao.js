const base = require('./base');

module.exports = async (word = '') => {
  const resultStr = await base(word);
  const BODY = JSON.parse(resultStr.text) || {};
  const {
    query = '',
      translation = []
  } = BODY;
  return {
    err: '',
    data: {
      src: query,
      dst: translation[0],
    }
  };
}