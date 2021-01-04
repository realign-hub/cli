const cmdCall = binRequire('lib/command-call');

module.exports = [
  {
    cmd: 'timestamp [timeString]',
    alias: 'ts',
    desc: '⏰\t获取时间戳',
    action(timeString = '') {
      const str = timeString ? timeString : 'now';
      cmdCall.timestamp(str);
    },
  },
  {
    cmd: 'translate <word> [engine]',
    alias: 'tl',
    desc: '🀄️\t文本翻译',
    action(word = '', engine = 'bd') {
      cmdCall.translate(word, engine);
    },
  },
  {
    cmd: 'ip',
    alias: '',
    desc: '🧭\t地址IP',
    action() {
      cmdCall.ip();
    },
  },
  {
    cmd: 'update',
    alias: 'u',
    desc: '💡\t检查更新',
    action() {
      cmdCall.update();
    },
  },
  {
    cmd: 'doctor',
    alias: 'd',
    desc: '🏥\t体检',
    action() {
      cmdCall.doctor();
    },
  },
  {
    cmd: 'info',
    alias: 'i',
    desc: '📝\t版本信息',
    action() {
      cmdCall.info();
    }
  },
];