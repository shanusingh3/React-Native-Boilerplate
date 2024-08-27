import 'react-native';
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

//This is to accept TS for custom styling while passing props to the stylesheet object and ignore eslint error.
/* Example*/
// inputStyles: (width: string) => ({
//   width: width,
// }),

declare module 'react-native' {
  namespace StyleSheet {
    type Style = ViewStyle | TextStyle | ImageStyle;
    type NamedStyles<T> = { [P in keyof T]: Style };
    export function create<T, S extends NamedStyles<S> | NamedStyles<any>>(
      styles: T | NamedStyles<S>,
    ): T & S;
  }
}
