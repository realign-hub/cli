const Type = {
  typeOf(o) {
    return ({}).toString.call(o).slice(8, -1).toLowerCase();
  },
  isBoolean(o) {
    return Type.typeOf(o) === 'boolean';
  },
};

module.exports = Type;