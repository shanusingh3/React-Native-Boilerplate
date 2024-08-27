import {
  type NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import * as React from 'react';

export const navigationRef: React.MutableRefObject<NavigationContainerRef | null> =
  React.createRef();

const navigate = (name: string, params: any = {}) => {
  navigationRef?.current?.navigate(name, params);
};

const push = (name: string, params: any = {}) => {
  const currentName = navigationRef?.current?.getCurrentRoute()?.name;
  const type = navigationRef?.current?.getCurrentRoute()?.params?.type;
  if (currentName === name || type === 'notification') {
    goBack();
  }
  navigationRef?.current?.dispatch(StackActions.push(name, params));
};

const replace = (name: string, params: any = {}) => {
  navigationRef?.current?.dispatch(StackActions.replace(name, params));
};

const logout = (name: string, _params: any = {}) => {
  console.warn(_params);
  navigationRef?.current?.dispatch(StackActions.popToTop());
  replace(name);
};
const goBack = () => {
  try {
    navigationRef?.current?.goBack();
  } catch (e) {
    console.warn(e);
  }
};
export const NavigationService = { navigate, goBack, push, replace, logout };
export default NavigationService;
