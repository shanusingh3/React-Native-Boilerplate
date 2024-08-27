import DeviceInfo from 'react-native-device-info';

const isTablet = DeviceInfo.isTablet();

export default isTablet;
export const getVersionInfo = (): string => DeviceInfo.getVersion();
export const getBuildInfo = (): string => DeviceInfo.getBuildNumber();
