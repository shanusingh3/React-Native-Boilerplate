import RNSInfo from 'react-native-sensitive-info';

const SENSITIVE_INFO_OPTIONS = {};

const storeDataInfo = async (storageName: string, storageData: string) => {
  try {
    await RNSInfo.setItem(storageName, storageData, SENSITIVE_INFO_OPTIONS);
  } catch (e) {
    return null;
  }
};

const fetchDataInfo = async (storageData: string) => {
  try {
    const response = await RNSInfo.getItem(storageData, SENSITIVE_INFO_OPTIONS);
    if (response && response !== null) {
      return JSON.parse(response);
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};

const clearAllInfo = async (storageName: string) => {
  try {
    await RNSInfo.deleteItem(storageName, SENSITIVE_INFO_OPTIONS);
  } catch (e) {
    return null;
  }
};

export const SensitiveInfoService = {
  storeDataInfo,
  fetchDataInfo,
  clearAllInfo,
};
