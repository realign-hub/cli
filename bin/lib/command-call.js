const pkg = rootRequire('package.json');

const options = {
  pkg,
};

const tools = {
  update() {
    binRequire('lib/check-version')(options, () => {});
  },
  doctor() {
    binRequire('lib/doctor')(options);
  },
  info() {
    binRequire('lib/info')(options);
  },
  timestamp(str = '') {
    binRequire('lib/timestamp')(options, {
      str
    });
  },
};

module.exports = tools;