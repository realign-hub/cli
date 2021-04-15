#!/usr/bin/env node

'use strict';

// 自定义 require 函数
global.binRequire = p => require(`${__dirname}/${p}`);
global.rootRequire = p => require(`${__dirname}/../${p}`);

const cmder = require('commander');
const Config = binRequire('cmd-config');
const cmdCall = binRequire('lib/command-call');

// 注册 cmd
Config.forEach((conf, i) => {
  const {
    cmd = '',
      alias = '',
      desc = '',
      action = () => {},
  } = conf;
  cmder
    .command(cmd)
    .alias(alias)
    .description(desc)
    .action(action);
});

cmder.on('--help', () => {
  console.log();
  console.log(`  Run re <command> --help for detailed usage of given command.`)
  console.log();
});

cmder.commands.forEach(c => c.on('--help', () => console.log()));

if (!process.argv[2]) {
  cmder.outputHelp();
  console.log();
  return false;
}

cmder
  .arguments('<command>')
  .action((cmd) => {
    cmder.outputHelp();
    console.log(`Unknown command ${cmd}.`);
    console.log();
    return false;
  });

cmder.parse(process.argv);
