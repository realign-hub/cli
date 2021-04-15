#!/usr/bin/env node

'use strict';

require('module-alias/register');

const cmder = require('commander');
import Config from './cmd-config';

// 注册 cmd
Config.forEach((conf: any) => {
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
  console.log('  Run re <command> --help for detailed usage of given command.');
  console.log();
});

cmder.commands.forEach((c: any) => c.on('--help', () => console.log()));

if (!process.argv[2]) {
  cmder.outputHelp();
  console.log();
  // return false;
  process.exit(0);
}

cmder
  .arguments('<command>')
  .action((cmd: any) => {
    cmder.outputHelp();
    console.log(`Unknown command ${cmd}.`);
    console.log();
    return false;
  });

cmder.parse(process.argv);
