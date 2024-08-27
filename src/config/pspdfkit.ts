import { NativeModules } from 'react-native';
import Config from 'react-native-config';

const PSPDFKit = NativeModules.PSPDFKit;
PSPDFKit.setLicenseKeys(Config.ANDROID_LICENSE_KEY, Config.IOS_LICENSE_KEY);

export default PSPDFKit;
