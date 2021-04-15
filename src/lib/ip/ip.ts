const chalk = require('chalk');
import logBox from '../../common/log-box';

import getLocal from './local';
import getOpen from './open';

export default async (options = {}) => {
  const open = await getOpen();
  const ipTables = { ...getLocal(), ...open };

  const logs: any[] = [];
  Object.keys(ipTables).forEach((k) => {
    logs.push(`${chalk.blue(k)} ${chalk.yellow(ipTables[k])}`);
  });

  logBox(logs);
};
