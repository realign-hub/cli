const Str = {
  removeSGRColor(str = '') {
    return str
      .replace(/\u001b/gm, '_+_')
      .replace(/(\_\+\_\[[0-9]{1,}m)/gm, '');
  },
};

module.exports = Str;