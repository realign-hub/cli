const child_process = require('child_process');
const Str = binRequire('common/str');

module.exports = (cmd = '', cb = () => {}) => {
  // const cmd = 'npm view fastpage';
  child_process.exec(cmd, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    } else {
      if (stderr) {
        console.log(stderr);
      } else {
        const strArr = (stdout || '').split(/[(\r\n)\r\n]+/);

        strArr.forEach((x, i) => {
          strArr[i] = Str.removeSGRColor(x);
        });

        cb && cb(strArr);
      }
    }
  });
};