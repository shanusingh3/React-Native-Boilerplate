declare module 'react-native-config' {
  export interface NativeConfig {
    BRAND_NAME?: string;
    BASE_URL?: string;
    ENV?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
