const QRCodeTerminal = require('qrcode-terminal');

export default (options = {}, cmdOpts: any = {}) => {
  const {
    str = ''
  } = cmdOpts;
  console.log();
  QRCodeTerminal.generate(str, { small: true, });
  console.log();
};
