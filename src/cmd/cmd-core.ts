import CheckVersion from './../lib/check-version';
import Doctor from './../lib/doctor';
import Info from './../lib/info';
import TimeStamp from './../lib/timestamp';
import Translate from './../lib/translate/index';
import Ip from './../lib/ip/ip';
import Short from './../lib/url/short';
import QRCode from './../lib/url/qrcode';
import Emoji from './../lib/emoji';
import ImgMock from '../lib/img-mock';
import Store from '../lib/store';

import { IF_CmdItemOptions, IF_CmdCoreOpts } from '@/typings';

const pkg = require('@/package.json');

export default (opts: IF_CmdCoreOpts) => {
  const options: IF_CmdItemOptions = {
    pkg,
    ...opts,
  };

  return {
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
    emoji(type: string, obj: { desc: string, mode?: string }) {
      Emoji(options, { type, ...obj });
    },
    imgMock(str = '') {
      ImgMock(options, { str });
    },
    store(type = '', value: any) {
      Store(options, {
        type,
        value,
      });
    },
  };
};
