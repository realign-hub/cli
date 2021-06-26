import Data from './data';

export const getStoreTypeList = () => {
  return Object.keys(Data).map((k) => (Data[k].storeType));
};

export const getTypeBigTypeObj = () => {
  // { bd: 'BD' }
  return Object.fromEntries(
    Object.keys(Data).map((bigKey) => (
      [Data[bigKey].storeType ,bigKey]
    ))
  );
};

export const getDataItem = (type: string) => {
  return Data[getTypeBigTypeObj()[type]];
};

export {
  Data,
};
