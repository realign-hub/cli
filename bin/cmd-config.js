const cmdCall = binRequire('lib/command-call');

module.exports = [
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
    desc: '🀄️ 文本翻译',
    action(word = '', engine = 'bd') {
      cmdCall.translate(word, engine);
    },
  },
  {
    cmd: 'ip',
    alias: '',
    desc: '🧭 IP地址',
    action() {
      cmdCall.ip();
    },
  },
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