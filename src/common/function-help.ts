import { IF_CmdCoreOpts } from '../../typings/index';
const chalk = require('chalk');
const isTer = (o: IF_CmdCoreOpts): boolean => o.env === 'terminal';

export function getChalk(options: IF_CmdCoreOpts) {
  const mcFn: any = {};
  const mcFnNames = [
    'red',
    'green',
    'blue',
    'yellow',
  ];
  mcFnNames.forEach((n) => {
    mcFn[n] = (x: any) => x;
  });
  return isTer(options) ? chalk : mcFn;
}

export default {};
