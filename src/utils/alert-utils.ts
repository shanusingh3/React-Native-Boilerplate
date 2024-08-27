/* eslint-disable no-undef */
import { t } from 'i18next';
import { Alert } from 'react-native';

export const showAlert = (
  title: string,
  message: string,
  okText?: string,
  cancelable = false,
  onPress?: () => void,
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: okText || 'Ok',
        style: 'cancel',
        onPress: onPress,
      },
    ],
    { cancelable: cancelable },
  );
};
export const showCancellableAlert = (
  title: string,
  message: string,
  okayText?: string,
  cancelText?: string,
  onPress?: () => void,
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: okayText || 'Ok',
        onPress: onPress,
      },
      {
        text: cancelText || 'Cancel',
        style: 'cancel',
        onPress: () => {},
      },
    ],
    { cancelable: true },
  );
};
export const showCancelandOkFunctionalAlert = (
  title: string,
  message: string,
  okayText?: string,
  cancelText?: string,
  onPress?: () => void,
  onCancelPress?: () => void,
) => {
  Alert.alert(
    title,
    message,
    [
      {
        text: okayText || 'Ok',
        onPress: onPress,
      },
      {
        text: cancelText || 'Cancel',
        style: 'cancel',
        onPress: onCancelPress,
      },
    ],
    { cancelable: true },
  );
};

export const alertWithTextInput = (
  title: string,
  message: string,
  okayText?: string,
  cancelText?: string,
  onPress?: (text: string) => void,
  onCancelPress: () => void,
) => {
  Alert.prompt(
    title,
    message,
    [
      {
        text: cancelText || 'Cancel',
        onPress: onCancelPress,
        style: 'cancel',
      },
      {
        text: okayText || 'OK',
        onPress: (text: string) => {
          onPress && onPress(text);
        },
      },
    ],
    'plain-text',
    // inputText,
  );
};

export const alertWithTextInputandRejectReason = (
  title: string,
  message: string,
  okayText?: string,
  cancelText?: string,
  onPress?: (text: string) => void,
  onCancelPress?: () => void,
) => {
  Alert.prompt(
    title,
    message,
    [
      {
        text: cancelText || 'Cancel',
        onPress: onCancelPress,
        style: 'cancel',
      },
      {
        text: okayText || 'OK',
        onPress: (text: string) => {
          if (text.trim() === '') {
            showAlert(
              t('survey:bw'),
              t('signature_request:rejectReason'),
              'OK',
            );
          } else {
            onPress && onPress(text);
          }
        },
      },
    ],
    'plain-text',
  );
};

export const processErrorMessage = (
  code: any,
  message: any,
  specificMessage: string,
  moduleType?: any,
  type?: any,
) => {
  //TODO isOffline to be handled here
  if (
    code === 500 ||
    code === 404 ||
    code === 403 ||
    (code === 502 && __DEV__)
  ) {
    showAlert(
      t('common:boardWorks'),
      specificMessage != '' ? specificMessage : `${moduleType} is not ${type}`,
      t('common:ok'),
    );
  } else {
    showAlert(t('common:boardWorks'), message, t('common:ok'));
  }
};
