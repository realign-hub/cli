const Type = {
  typeOf(o: any) {
    return ({}).toString.call(o).slice(8, -1).toLowerCase();
  },
  isBoolean(o: any) {
    return Type.typeOf(o) === 'boolean';
  },
};

export default Type;
