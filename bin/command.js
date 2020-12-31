#!/usr/bin/env node

'use strict';

const commander = require('commander');
const tools = require('./tools');
const type = require('./common/type');

commander
  .option('-u, --update', '检查升级版本')
  .option('-d, --doctor', '检查工程结构')
  .option('-v, --versions', '查看版本信息')
  .option('-ts, --timestamp [time string]', '生成时间戳')
  .parse(process.argv);

if (commander.update) {
  tools.update();
  return false;
}
if (commander.doctor) {
  tools.doctor();
  return false;
}
if (commander.versions) {
  tools.versions();
  return false;
}
if (commander.timestamp) {
  const str = type.isBoolean(commander.timestamp) ? 'now' : commander.timestamp;
  tools.timestamp(str);
  return false;
}