import {
  IF_LEVEL_DB_OBJ,
} from '@/typings';

import logBox from '../../common/log-box';
import { getChalk } from '../../common/function-help';

import {
  LEVEL_GETTER_ERROR,
  LEVEL_SETTER_ERROR,
} from '../../common/const';

const os = require('os');
const {
  join,
} = require('path');
const fsx = require('fs-extra');
const level = require('level');
const HOME_DIR = os.homedir();

const getNameByErrMessage = (msg = '') => {
  var groups = (msg.match(/\[(?<name>.+?)\]/) || {}).groups || {};
  const { name = '' } = groups;
  return name;
};

// 基础
export const DB_ROOT_DIR = '.re-x_cli';
export const DB_ROOT_DIR_FULL = join(HOME_DIR, DB_ROOT_DIR);

// 获取路径
export const getDBPath = (...dps: string[]) => {
  const dp = join(DB_ROOT_DIR_FULL, ...dps);
  fsx.ensureDir(DB_ROOT_DIR_FULL);
  return dp;
};

export const getStoreErrorLBO = (name: string, storeType: string) => {
  const chalk = getChalk(null);
  const X: any = {};

  X[`${chalk.red(`${name} 缺失！`)}`] = '';
  X[`${chalk.blue(`使用下面的命令来设置或者更新 ${name}`)}`] = '';
  X[`${chalk.green('$')} re store ${storeType} [Your value]`] = '';

  return X;
};

export const _getter = async (dbObj: IF_LEVEL_DB_OBJ) => {
  const {
    path,
    key,
    storeType,
  } = dbObj;

  try {
    return await level(path).get(key);
  } catch(err) {
    if((err.message || '').indexOf('Key not found in database') === 0) {
      const name = getNameByErrMessage(err.message);
      logBox(null, getStoreErrorLBO(name, storeType));
    }
    throw new Error(LEVEL_GETTER_ERROR);
  }
};

export const _setter = async (dbObj: IF_LEVEL_DB_OBJ, value: any) => {
  const {
    path,
    key,
  } = dbObj;
  try {
    await level(path).put(key, value);
    return true;
  } catch(err) {
    throw new Error(LEVEL_SETTER_ERROR);
  }
};
