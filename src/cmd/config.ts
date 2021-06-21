import { IF_CmdCoreOpts } from '@/typings';
import cmdCore from './cmd-core';

export function getCmdList(cmdOptions: IF_CmdCoreOpts) {
  const cmdFns = cmdCore(cmdOptions);
  return [
    {
      cmd: 'timestamp [timeString]',
      alias: 'ts',
      desc: '⏰ 获取时间戳',
      action(timeString = '') {
        const str = timeString ? timeString : 'now';
        cmdFns.timestamp(str);
      },
    },
    {
      cmd: 'translate <word> [engine]',
      alias: 'tl',
      desc: '🀄️ 文本翻译 _ engine => { 百度 -> bd, 有道 -> yd }',
      action(word = '', engine = 'bd') {
        cmdFns.translate(word, engine);
      },
    },
    {
      cmd: 'ip',
      alias: '',
      desc: '🧭 地址IP',
      action() {
        cmdFns.ip();
      },
    },
    {
      cmd: 'short <link>',
      alias: 'sh',
      desc: '🔗 生成短链',
      action(link = '') {
        cmdFns.urlShort(link);
      },
    },
    {
      cmd: 'qrcode <link>',
      alias: 'qr',
      desc: '🌐 生成二维码',
      action(link = '') {
        cmdFns.urlQRCode(link);
      },
    },
    {
      cmd: 'emoji <desc> [mode]',
      alias: 'ej',
      desc: '😃 🔡查表情 _ mode => { am -> allMatch 全字匹配 }',
      action(desc = '', mode = '') {
        cmdFns.emoji('search', { desc, mode });
      },
    },
    {
      cmd: 'emoji-find <emoji>',
      alias: 'ejf',
      desc: '🔍 😃表情名',
      action(desc = '') {
        cmdFns.emoji('find', { desc });
      },
    },
    {
      cmd: 'img-mock <conf>',
      alias: 'im',
      desc: '🧩 模拟图片 _ conf => {width}x{height}_{bgc} | bgc=none -> transparent',
      action(conf = '') {
        cmdFns.imgMock(conf);
      },
    },

    // 系统
    {
      cmd: 'update',
      alias: 'u',
      desc: '💡 检查更新',
      action() {
        cmdFns.update();
      },
    },
    {
      cmd: 'doctor',
      alias: 'd',
      desc: '🏥 体检',
      action() {
        cmdFns.doctor();
      },
    },
    {
      cmd: 'info',
      alias: 'i',
      desc: '📝 版本信息',
      action() {
        cmdFns.info();
      }
    },
  ];
}

export default {};
