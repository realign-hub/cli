#!/usr/bin/env node

'use strict';

const commander = require('commander');
const tools = require('./tools');

commander
  .option('-u, --update', '检查升级版本')
  .option('-d, --doctor', '检查工程结构')
  .option('-v, --versions', '查看版本信息')
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