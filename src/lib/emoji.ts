const emoji = require('../../modules/node-emoji');
const inquirer = require('inquirer');
const clipboardy = require('clipboardy');
import TIPS from '../common/tips';
import logBox from '../common/log-box';

export default (options = {}, cmdOpts: any = {}) => {
  const {
    type = '',
    str = '',
  } = cmdOpts;

  if (type === 'search') {
    const choicesSearch = emoji.search(str).map((x: any) => {
      return {
        name: `${x.emoji}\t${x.key}`,
        value: x.emoji,
      };
    });

    if(choicesSearch.length === 0) {
      console.log('[无]');
      return;
    }

    inquirer.prompt([
      {
        name: 'item',
        type: 'list',
        message: '请选择',
        default: str,
        choices: choicesSearch,
      }
    ]).then((ans: any) => {
      clipboardy.writeSync(`${ans.item}`);
      const logs = [
        `\n表情 ${ans.item} ${TIPS.copied}\n`,
      ];
      logBox(logs);
    });
  } else if(type === 'find') {
    console.log(emoji.find(str));
  } else {
    // qw
  }
};
