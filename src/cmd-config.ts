import cmdCall from './lib/command-call';

export default [
  {
    cmd: 'timestamp [timeString]',
    alias: 'ts',
    desc: '⏰ 获取时间戳',
    action(timeString = '') {
      const str = timeString ? timeString : 'now';
      cmdCall.timestamp(str);
    },
  },
  {
    cmd: 'translate <word> [engine]',
    alias: 'tl',
    desc: '🀄️ 文本翻译 _ engine => { 百度 -> bd, 有道 -> yd }',
    action(word = '', engine = 'bd') {
      cmdCall.translate(word, engine);
    },
  },
  {
    cmd: 'ip',
    alias: '',
    desc: '🧭 地址IP',
    action() {
      cmdCall.ip();
    },
  },
  {
    cmd: 'short <link>',
    alias: 'sh',
    desc: '🔗 生成短链',
    action(link = '') {
      cmdCall.urlShort(link);
    },
  },
  {
    cmd: 'qrcode <link>',
    alias: 'qr',
    desc: '🌐 生成二维码',
    action(link = '') {
      cmdCall.urlQRCode(link);
    },
  },
  {
    cmd: 'emoji <desc>',
    alias: 'ej',
    desc: '😃 🔡查表情',
    action(desc = '') {
      cmdCall.emoji('search', desc);
    },
  },
  {
    cmd: 'emoji-find <emoji>',
    alias: 'ejf',
    desc: '🔍 😃表情名',
    action(desc = '') {
      cmdCall.emoji('find', desc);
    },
  },
  {
    cmd: 'img-mock <conf>',
    alias: 'im',
    desc: '🧩 模拟图片 _ conf => {width}x{height}_{bgc} | bgc=none -> transparent',
    action(conf = '') {
      cmdCall.imgMock(conf);
    },
  },

  // 系统
  {
    cmd: 'update',
    alias: 'u',
    desc: '💡 检查更新',
    action() {
      cmdCall.update();
    },
  },
  {
    cmd: 'doctor',
    alias: 'd',
    desc: '🏥 体检',
    action() {
      cmdCall.doctor();
    },
  },
  {
    cmd: 'info',
    alias: 'i',
    desc: '📝 版本信息',
    action() {
      cmdCall.info();
    }
  },
];
