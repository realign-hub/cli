import base from './base';

export default async (word = '') => {
  try {
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
  } catch(err) {
    //
  }
};
