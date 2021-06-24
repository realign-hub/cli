import { IF_CmdItemOptions } from '@/typings';

const boxen = require('boxen');

const buildStrArr = (obj: any) => {
  const arr: string[] = [];
  Object.keys(obj).forEach((k) => {
    arr.push(obj[k] === '' ? `${k}` : `${k}: ${obj[k]}`);
  });
  return arr;
};

export default (options: IF_CmdItemOptions, obj: any, attachLog: string = '') => {
  const {
    env = 'terminal',
  } = options;

  if (env === 'terminal') {
    const strArr = buildStrArr(obj);
    if (attachLog) {
      strArr.push(attachLog);
    }
    console.log('');
    console.log(boxen(strArr.join('\n\n'), {
      padding: 1,
      borderColor: 'green'
    }));
    console.log('');
  } else if (env === 'electron') {
    console.log(JSON.stringify(obj));
  }
};
