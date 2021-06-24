import { IF_CmdItemOptions } from '@/typings';

import logBox from '../common/log-box';
import { getChalk } from '../common/function-help';

const isNormal = (v = '') => v && v.indexOf('-alpha') === -1 && v.indexOf('-beta') === -1;

export default (options: IF_CmdItemOptions) => {
  const {
    pkg = {},
  } = options;
  const chalk = getChalk(options);
  const {
    name = '',
    version = '',
  } = pkg;
  const c = isNormal(version) ? 'blue' : 'yellow';
  const LBO: any = {};
  LBO[`${chalk.blue(name)} ${chalk.yellow('version as follow:')}`] = '';
  LBO[chalk[c](`v${version}`)] = '';

  logBox(options, LBO);
};
