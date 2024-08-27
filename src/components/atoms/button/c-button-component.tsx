/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Text from '../text/c-text-component';
import scaler from '@utils/scaler';
import { theme } from '@theme/theme';

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress?: any;
  titleColor?: string;
  title: string;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const {
    style,
    titleColor = 'white',
    title = '',
    onPress = () => {},
    isLoading = false,
    disabled = false,
  } = props;
  return (
    <TouchableOpacity
      style={[styles.btnStyles, style, disabled && styles.disabledBtn]}
      onPress={onPress}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text variant='bodyNormal1' color={titleColor}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnStyles: {
    height: scaler(50),
    borderRadius: scaler(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.deepPurple,
  },
  disabledBtn: {
    opacity: 0.5,
  },
});
export default Button;
