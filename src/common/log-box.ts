const boxen = require('boxen');

export default (strArr: any[]) => {
  console.log('');
  console.log(boxen(strArr.join('\n'), {
    padding: 1,
    borderColor: 'green'
  }));
  console.log('');
};
