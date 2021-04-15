const semver = require('semver');
const chalk = require('chalk');
const ora = require('ora');
import logBox from '../common/log-box';
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

export default (options: any = {}, done = null) => {
  const {
    pkg = {},
  } = options;
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
    let logs = [];

    if (semver.lt(localVersion, latestVersion)) {
      logs = [
        `${chalk.yellow('A newer version of')} ${chalk.blue(name)} ${chalk.yellow('is available.')}`,
        '',
        `latest:    ${chalk.green(latestVersion)}`,
        `installed: ${chalk.red(localVersion)}`,
        '',
        'Please use follow command to update!',
        '',
        `${chalk.green('$')} npm i ${name}`,
      ];
    } else {
      logs = [
        `${chalk.green('Congratulations!')}`,
        '',
        `Package ${chalk.blue(name)} is the latest version.`,
        `Current version: ${chalk.green(latestVersion)}`,
      ];
    }
    logBox(logs);
  });
  // request({
  //     url: `https://api.npms.io/v2/package/${name}`,
  //     timeout: 1000,
  //   },
  //   (err = {}, res = {}, body = {}) => {
  //     Spinner.stop();
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       if (res.statusCode !== 200) {
  //         const errLogs = [
  //           `${chalk.blue(name)} ${chalk.yellow('has no version available.')}`,
  //           '',
  //           `Please make sure ${chalk.blue(name)} has published!`,
  //         ];
  //         logBox(errLogs);
  //       } else {
  //         const INFO = JSON.parse(body);
  //         const localVersion = version;
  //         const latestVersion = INFO.collected.metadata.version;
  //         let logs = [];

  //         if (semver.lt(localVersion, latestVersion)) {
  //           logs = [
  //             `${chalk.yellow('A newer version of')} ${chalk.blue(name)} ${chalk.yellow('is available.')}`,
  //             '',
  //             `latest:    ${chalk.green(latestVersion)}`,
  //             `installed: ${chalk.red(localVersion)}`,
  //             '',
  //             'Please use follow command to update!',
  //             '',
  //             `${chalk.green('$')} npm i ${name}`,
  //           ];
  //         } else {
  //           logs = [
  //             `${chalk.green('Congratulations!')}`,
  //             '',
  //             `Package ${chalk.blue(name)} is the latest version.`,
  //             `Current version: ${chalk.green(latestVersion)}`,
  //           ];
  //         }
  //         logBox(logs);
  //       }
  //       done();
  //     }
  //   }
  // );
};
