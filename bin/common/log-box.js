const boxen = require('boxen');

module.exports = (strArr = []) => {
  console.log('');
  console.log(boxen(strArr.join('\n'), {
    padding: 1,
    borderColor: 'green'
  }));
  console.log('');
};