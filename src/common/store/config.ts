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

// 基础
export const DB_ROOT_DIR = '.re-x_cli';
export const DB_ROOT_DIR_FULL = join(HOME_DIR, DB_ROOT_DIR);

// 获取路径
export const getDBPath = (...dps: string[]) => {
  const dp = join(DB_ROOT_DIR_FULL, ...dps);
  fsx.ensureDir(DB_ROOT_DIR_FULL);
  return dp;
};

// 短链
export const SHORT_URL_TOKEN = {
  DP: getDBPath('short_url_token'),
  KEY: 'token',
};


export const _getter = async (dbPath: string, key: string) => {
  try {
    return await level(dbPath).get(key);
  } catch(err) {
    throw new Error(LEVEL_GETTER_ERROR);
  }
};

export const _setter = async (dbPath: string, key: string, value: any) => {
  try {
    await level(dbPath).put(key, value);
    return true;
  } catch(err) {
    throw new Error(LEVEL_SETTER_ERROR);
  }
};
