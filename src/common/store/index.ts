import {
  SHORT_URL_TOKEN,

  _getter,
  _setter,
} from './config';

export async function shortUrlTokenSetter(value: any) {
  return await _setter(SHORT_URL_TOKEN.DP, SHORT_URL_TOKEN.KEY, value);
}
export async function shortUrlTokenGetter() {
  return await _getter(SHORT_URL_TOKEN.DP, SHORT_URL_TOKEN.KEY);
}
