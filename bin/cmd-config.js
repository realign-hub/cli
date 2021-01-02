const cmdCall = binRequire('lib/command-call');

module.exports = [
  {
    cmd: 'timestamp [timeString]',
    desc: '⏰ 获取时间戳',
    action(timeString = '') {
      const str = timeString ? timeString : 'now';
      cmdCall.timestamp(str);
    },
  },
  {
    cmd: 'update',
    desc: '💡 检查更新',
    action() {
      cmdCall.update();
    },
  },
  {
    cmd: 'doctor',
    desc: '🏥 体检',
    action() {
      cmdCall.doctor();
    },
  },
  {
    cmd: 'info',
    desc: '📝 版本信息',
    action() {
      cmdCall.info();
    }
  },
];