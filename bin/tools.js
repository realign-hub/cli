const pkg = require('./../package.json');

const options = {
  pkg,
};

const tools = {
  update() {
    require('./lib/check-version')(options, () => {});
  },
  doctor() {
    require('./lib/doctor')(options);
  },
  versions() {
    require('./lib/versions')(options);
  },
  timestamp(str = '') {
    require('./lib/timestamp')(options, { str });
  },
};

module.exports = tools;