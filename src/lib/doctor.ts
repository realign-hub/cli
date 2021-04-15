const chalk = require('chalk');
import logBox from '../common/log-box';

export default (options: any= {}) => {
  const {
    pkg = {},
  } = options;
  const {
    name = '',
  } = pkg;
  const errLogs = [
    `${chalk.blue(name)} ${chalk.yellow('has no doctor now.')}`,
    '',
    'It will come soon.',
  ];
  logBox(errLogs);
};
