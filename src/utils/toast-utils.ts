import ErrorString from '@constants/error-constant';
import Toast from 'react-native-toast-message';

export const showToast = (
  type: any,
  message: any,
  visibilityTime: any,
  position: any = 'bottom',
) => {
  Toast.show({
    type,
    text1: message,
    visibilityTime,
    position,
  });
};

export const showSuccessToast = (message: any) => {
  Toast.show({
    type: 'success',
    text1: message,
    visibilityTime: 2000,
    position: 'top',
  });
};

export const showGenericErrorToast = () => {
  Toast.show({
    type: 'error',
    text1: ErrorString.GENERIC_ERROR_MESSAGE,
    visibilityTime: 2000,
    position: 'top',
  });
};
