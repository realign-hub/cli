const Str: any = {
  removeSGRColor(str = '') {
    return str
      // eslint-disable-next-line no-control-regex
      .replace(/\u001b/gm, '_+_')
      .replace(/(_\+_\[[0-9]{1,}m)/gm, '');
  },
};

export default Str;
