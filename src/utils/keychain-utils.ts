import * as Keychain from 'react-native-keychain';

export const setKeychainPassword = async (field: string) => {
  await Keychain.setGenericPassword('BOARDWORKS', field ?? '');
};

export const getKeychainAccessToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    return credentials ?? null;
  } catch (error) {
    return null;
  }
};

export const resetKeychainPassword = async () => {
  await Keychain.resetGenericPassword();
};

export default {
  setKeychainPassword,
  resetKeychainPassword,
  getKeychainAccessToken,
};
