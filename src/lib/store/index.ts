import { IF_CmdItemOptions } from '@/typings';

import logBox from '../../common/log-box';
import { getChalk } from '../../common/function-help';
import { getDataItem } from '../../common/store';

export default async (options: IF_CmdItemOptions, cmdOpts: any = {}) => {
  const {
    type = '',
    value = '',
  } = cmdOpts;
  const chalk = getChalk(options);
  let setRes = null;
  setRes = await getDataItem(type).setter(value);

  const LBO: any = {};
  if(setRes === true) {
    LBO[`${chalk.green('设置或更新成功')}`] = '';
  } else {
    LBO[`${chalk.red('设置或更新失败')}`] = '';
  }

  logBox(options, LBO);
};
