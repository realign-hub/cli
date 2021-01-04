const chalk = require('chalk');
const logBox = binRequire('common/log-box');

const getLocal = binRequire('lib/ip/local');
const getOpen = binRequire('lib/ip/open');

module.exports = async (options = {}) => {
  const open = await getOpen();
  const ipTables = { ...getLocal(), ...open };

  const logs = [];
  Object.keys(ipTables).forEach((k) => {
    logs.push(`${chalk.blue(k)} ${chalk.yellow(ipTables[k])}`);
  });

  logBox(logs);
};