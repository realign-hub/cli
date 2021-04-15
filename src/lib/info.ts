const chalk = require('chalk');
import logBox from '../common/log-box';
const isNormal = (v = '') => v && v.indexOf('-alpha') === -1 && v.indexOf('-beta') === -1;

export default (options: any = {}) => {
  const {
    pkg = {},
  } = options;
  const {
    name = '',
    version = '',
  } = pkg;
  const c = isNormal(version) ? 'blue' : 'yellow';
  const logs = [
    `${chalk.blue(name)} ${chalk.yellow('version as follow:')}`,
    '',
    chalk[c](`v${version}`),
  ];
  logBox(logs);
};
