import { IF_CmdItemOptions } from '@/typings';

import logBox from '../../common/log-box';
import { getChalk } from '../../common/function-help';

import getLocal from './local';
import getOpen from './open';

export default async (options: IF_CmdItemOptions) => {
  const chalk = getChalk(options);
  const open = await getOpen();
  const ipTables = { ...getLocal(), ...open };

  const obj: any = {};
  Object.keys(ipTables).forEach((k) => {
    obj[`${chalk.blue(k)}`] = chalk.yellow(ipTables[k]);
  });

  logBox(options, obj);
};
