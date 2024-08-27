/* eslint-disable react/display-name */
import React, { type ReactNode } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  StyleSheet,
} from 'react-native';

interface KeyboardDismissHOCProps {
  children: ReactNode;
}

function withKeyboardDismiss<P>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P & KeyboardDismissHOCProps> {
  return ({ children, ...props }: KeyboardDismissHOCProps) => {
    const handlePressOutside = () => {
      Keyboard.dismiss();
    };

    return (
      <TouchableWithoutFeedback onPress={handlePressOutside}>
        <View style={styles.container}>
          <WrappedComponent {...(props as P)}>{children}</WrappedComponent>
        </View>
      </TouchableWithoutFeedback>
    );
  };
}

export default withKeyboardDismiss;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
