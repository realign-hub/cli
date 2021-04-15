const QRCodeTerminal = require('qrcode-terminal');

module.exports = (options = {}, cmdOpts = {}) => {
  const {
    str = ''
  } = cmdOpts;
  console.log();
  QRCodeTerminal.generate(str, { small: true, });
  console.log();
};