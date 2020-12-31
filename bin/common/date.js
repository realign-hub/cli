const moment = require('moment');

module.exports = {
  format(date = null) {
    return moment(date || Date.now()).format('YYYY-MM-DD HH:mm:ss');
  }
};