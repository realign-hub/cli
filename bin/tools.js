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
};

module.exports = tools;