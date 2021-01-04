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
  translate(str = '', engine) {
    binRequire('lib/translate/index')(options, {
      str,
      engine,
    });
  },
  ip() {
    binRequire('lib/ip/ip')(options);
  },
  urlShort(str = '') {
    binRequire('lib/url/short')(options, { str });
  },
  urlQRCode(str = '') {
    binRequire('lib/url/qrcode')(options, { str });
  },
};

module.exports = tools;