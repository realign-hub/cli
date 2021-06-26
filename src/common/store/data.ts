import {
  IF_LEVEL_DB_OBJ,
} from '@/typings';
import {
  getDBPath,

  _getter,
  _setter,
} from './util';

interface DataProps {
  [propName: string]: IF_LEVEL_DB_OBJ;
}

const Data: DataProps = {
  // 短链
  SHORT_URL_TOKEN: {
    path: getDBPath('short_url_token'),
    key: 'token',
    storeType: 'short_url_token',
    async setter(value: any) {
      return await _setter(this, value);
    },
    async getter() {
      return await _getter(this);
    },
  },
  // 百度翻译
  BD_TRANSLATE_APPID: {
    path: getDBPath('bd_translate_id'),
    key: 'appid',
    storeType: 'baidu_appid',
    async setter(value: any) {
      return await _setter(this, value);
    },
    async getter() {
      return await _getter(this);
    },
  },
  BD_TRANSLATE_APPSECRET: {
    path: getDBPath('bd_translate_secret'),
    key: 'appsecret',
    storeType: 'baidu_appsecret',
    async setter(value: any) {
      return await _setter(this, value);
    },
    async getter() {
      return await _getter(this);
    },
  },
  // 有道翻译
  YD_TRANSLATE_APP_KEY: {
    path: getDBPath('yd_translate_app'),
    key: 'appKey',
    storeType: 'youdao_app_key',
    async setter(value: any) {
      return await _setter(this, value);
    },
    async getter() {
      return await _getter(this);
    },
  },
  YD_TRANSLATE_SECRET_KEY: {
    path: getDBPath('yd_translate_secret'),
    key: 'secretKey',
    storeType: 'youdao_secret_key',
    async setter(value: any) {
      return await _setter(this, value);
    },
    async getter() {
      return await _getter(this);
    },
  },
};

export default Data;
