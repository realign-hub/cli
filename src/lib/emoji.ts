const emoji = require('node-emoji');
const inquirer = require('inquirer');
const clipboardy = require('clipboardy');
import TIPS from '../common/tips';
import logBox from '../common/log-box';

export default (options = {}, cmdOpts: any = {}) => {
  const {
    str = ''
  } = cmdOpts;

  const choices = emoji.search(str).map((x: any) => {
    return {
      name: x.emoji,
      value: x.emoji,
    };
  });

  inquirer.prompt([
    {
      name: 'item',
      type: 'list',
      message: '请选择',
      default: str,
      choices,
    }
  ]).then((ans: any) => {
    clipboardy.writeSync(`${ans.item}`);
    const logs = [
      `\n表情 ${ans.item} ${TIPS.copied}\n`,
    ];
    logBox(logs);
  });
};
