import CheckVersion from './../lib/check-version';
import Doctor from './../lib/doctor';
import Info from './../lib/info';
import TimeStamp from './../lib/timestamp';
import Translate from './../lib/translate/index';
import Ip from './../lib/ip/ip';
import Short from './../lib/url/short';
import QRCode from './../lib/url/qrcode';

const pkg = require('@/package.json');

const options = {
  pkg,
};

const tools = {
  update() {
    CheckVersion(options);
  },
  doctor() {
    Doctor(options);
  },
  info() {
    Info(options);
  },
  timestamp(str = '') {
    TimeStamp(options, {
      str
    });
  },
  translate(str = '', engine: any) {
    Translate(options, {
      str,
      engine,
    });
  },
  ip() {
    Ip(options);
  },
  urlShort(str = '') {
    Short(options, { str });
  },
  urlQRCode(str = '') {
    QRCode(options, { str });
  },
};

export default tools;
