import { IF_CmdItemOptions } from '@/typings';

import logBox from '../common/log-box';
import { getChalk } from '../common/function-help';

export default (options: IF_CmdItemOptions) => {
  const {
    pkg = {},
  } = options;
  const chalk = getChalk(options);
  const {
    name = '',
  } = pkg;
  const errLogs = [
    `${chalk.blue(name)} ${chalk.yellow('has no doctor now.')}`,
    '',
    'It will come soon.',
  ];
  logBox(options, errLogs);
};
