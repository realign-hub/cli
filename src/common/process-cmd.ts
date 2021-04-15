const child_process = require('child_process');
import Str from './str';

export default (cmd = '', cb: any) => {
  // const cmd = 'npm view fastpage';
  child_process.exec(cmd, (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.log(err);
    } else {
      if (stderr) {
        console.log(stderr);
      } else {
        const strArr = (stdout || '').split(/[(\r\n)\r\n]+/);

        strArr.forEach((x: any, i: any) => {
          strArr[i] = Str.removeSGRColor(x);
        });

        cb && cb(strArr);
      }
    }
  });
};
