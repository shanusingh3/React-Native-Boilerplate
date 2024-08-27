import { theme } from '@theme/theme';
import scaler from '@utils/scaler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BaseToast, ErrorToast, ToastConfig } from 'react-native-toast-message';

const toastConfig: ToastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={styles.customStyle}
      contentContainerStyle={styles.errorTextStyle1}
      text1Style={styles.errorTextStyle1}
      text2Style={styles.errorTextStyle1}
      text1NumberOfLines={10}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={styles.customStyle}
      contentContainerStyle={styles.errorTextStyle1}
      text1Style={styles.errorTextStyle1}
      text2Style={styles.errorTextStyle2}
      text1NumberOfLines={10}
    />
  ),

  customToast: (text1: string, props: any) => (
    <View style={styles.customStyle}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  ),
};

export default toastConfig;

const styles = StyleSheet.create({
  customStyle: {
    height: 100,
    width: '90%',
    borderLeftColor: theme.colors.deepPurple,
    backgroundColor: theme.colors.deepPurple,
    marginHorizontal: scaler(40),
  },
  errorTextStyle1: {
    fontSize: 18,
    color: theme.colors.white,
  },
  errorTextStyle2: {
    fontSize: 18,
    color: theme.colors.white,
  },
});
