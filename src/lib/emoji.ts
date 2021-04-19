const emoji = require('../../modules/node-emoji');
const inquirer = require('inquirer');
const clipboardy = require('clipboardy');
import TIPS from '../common/tips';
import logBox from '../common/log-box';

export default (options = {}, cmdOpts: any = {}) => {
  const {
    type = '',
    desc = '',
    mode = '',
  } = cmdOpts;

  if (type === 'search') {
    const choicesSearch = emoji.search(desc, { allMatch: mode === 'am' }).map((x: any) => {
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
        default: desc,
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
    console.log(emoji.find(desc));
  } else {
    // qw
  }
};
