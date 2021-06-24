import { IF_CmdItemOptions } from '@/typings';

const semver = require('semver');
const ora = require('ora');
import logBox from '../common/log-box';
import { getChalk } from '../common/function-help';
const Spinner = ora('Updating...');

import processCmd from '../common/process-cmd';

const getLatestVersion = (strArr = []) => {
  const prefix = 'latest: ';
  let latestVersion = '';
  strArr.some((x: any) => {
    const index = x.indexOf(prefix);
    const isLatestVersionLine = index === 0;
    if (isLatestVersionLine) {
      latestVersion = x.substr(index + prefix.length);
    }
    return index === 0;
  });
  return latestVersion;
};

export default (options: IF_CmdItemOptions, done = null) => {
  const {
    pkg = {},
  } = options;
  const chalk = getChalk(options);
  const {
    name = '',
    version = '',
  } = pkg;

  Spinner.start();
  processCmd(`npm view ${name}`, (strArr = []) => {
    Spinner.stop();
    const latestVersion = getLatestVersion(strArr);
    // checkFn();
    const localVersion = version;
    // const latestVersion = INFO.collected.metadata.version;
    const LBO: any = {};

    if (semver.lt(localVersion, latestVersion)) {
      LBO[`${chalk.yellow('A newer version of')} ${chalk.blue(name)} ${chalk.yellow('is available.')}`] = '';
      LBO['latest'] = chalk.green(latestVersion);
      LBO['installed'] = chalk.red(localVersion);
      LBO[`${chalk.green('Please use follow command to update!')}`] = '';
      LBO[`${chalk.green('$')} npm i ${name}`] = '';
      LBO[`${chalk.green('$')} npm i ${name} -g`] = '';
      LBO[`${chalk.green('$')} yarn add ${name}`] = '';
      LBO[`${chalk.green('$')} yarn add ${name} -g`] = '';
    } else {
      LBO[`${chalk.green('Congratulations!')}`] = '';
      LBO[`Package ${chalk.blue(name)} is the latest version.`] = '';
      LBO[`Current version: ${chalk.green(latestVersion)}`] = '';
    }
    logBox(options, LBO);
  });
};
