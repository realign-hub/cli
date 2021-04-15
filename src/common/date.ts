const moment = require('moment');

export default {
  format(date = null) {
    return moment(date || Date.now()).format('YYYY-MM-DD HH:mm:ss');
  }
};
