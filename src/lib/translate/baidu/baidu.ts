import base from './base';

const ErrorMap: any = {
  '52001': '请求超时',
  '52002': '系统错误',
  '52003': '未授权用户',
  '54000': '必填参数为空',
  '54001': '签名错误',
  '54003': '访问频率受限',
  '54004': '账户余额不足',
  '54005': '长query请求频繁',
  '58000': '客户端IP非法',
  '58001': '译文语言方向不支持',
  '58002': '服务器当前已关闭',
  '90107': '认证未通过或未生效',
};

export default async (word = '') => {
  try {
    const resultStr = await base(word);
    const BODY = JSON.parse(resultStr.text) || {};
    const cbArgs = {
      err: '',
      data: {
        src: '',
        dst: '',
      },
    };
    const {
      error_code = '',
      trans_result = [],
    } = BODY;
    if (error_code) {
      cbArgs.err = ErrorMap[error_code];
    } else {
      const R = trans_result[0];

      cbArgs.data.src = R.src;
      cbArgs.data.dst = R.dst;
    }

    return cbArgs;
  } catch(err) {
    //
  }
};
