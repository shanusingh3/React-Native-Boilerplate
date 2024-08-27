import { theme } from '@theme/theme';
import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface ISepratorProps {
  height?: number;
  style?: ViewStyle;
  color?: string;
}

const Seprator = (props: ISepratorProps) => {
  const { height = 0.5, color = theme.colors.lightGrey, style } = props;
  return <View style={[styles.container(height, color), style]} />;
};

export default React.memo(Seprator);

const styles = StyleSheet.create({
  container: (height: number, color: string) => ({
    width: '100%',
    height: height,
    backgroundColor: color,
  }),
});
