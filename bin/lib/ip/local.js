const os = require('os');

module.exports = () => {
  const ipTables = {};
  const iFaces = os.networkInterfaces();

  for (let dev in iFaces) {
    iFaces[dev].forEach((details, alias) => {
      if (details.family === 'IPv4' && dev === 'en0') {
        // ipTables.push(`${dev + (alias ? ':' + alias : '')} = ${details.address}`);
        ipTables['内网'] = details.address;
      }
    });
  }
  return ipTables;
};