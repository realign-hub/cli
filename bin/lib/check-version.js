const request = require('request');
const semver = require('semver');
const chalk = require('chalk');
const ora = require('ora');
const logBox = require('./../common/log-box');
const Spinner = ora('Updating...');

module.exports = (options = {}, done) => {
  const {
    pkg = {},
  } = options;
  const {
    name = '',
      version = '',
  } = pkg;
  Spinner.start();
  request({
      url: `https://api.npms.io/v2/package/${name}`,
      timeout: 1000,
    },
    (err = {}, res = {}, body = {}) => {
      Spinner.stop();
      if (err) {
        console.log(err);
      } else {
        if (res.statusCode !== 200) {
          const errLogs = [
            `${chalk.blue(name)} ${chalk.yellow('has no version available.')}`,
            '',
            `Please make sure ${chalk.blue(name)} has published!`,
          ];
          logBox(errLogs);
        } else {
          const INFO = JSON.parse(body);
          const localVersion = version;
          const latestVersion = INFO.collected.metadata.version;
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
        }
        done();
      }
    }
  );
};