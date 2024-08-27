/* eslint-disable no-unreachable */
import NavigationService, {
  navigationRef,
} from '@app/navigation/navigation-service';
import { ROUTES } from '@constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '@services/auth-service';
import { removeAuthorizationHeaders } from '@services/service-utils';
import {
  getKeychainAccessToken,
  resetKeychainPassword,
  setKeychainPassword,
} from '@utils/keychain-utils';
import LoaderThunk from '../loader/loder-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ASYNC_STORAGE_KEY } from '@constants/async-constant';
import { StackActions } from '@react-navigation/native';

const login = createAsyncThunk(
  'login',
  async (body: any, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(body);
      const { status } = response;
      if (status === 200) {
        const { data } = response;
        const { token } = data;
        await setKeychainPassword(JSON.stringify(token));
        NavigationService.replace(ROUTES.Splash);
      }
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const changeLoginType = createAsyncThunk(
  'changeLoginType',
  async (isLogin: boolean) => isLogin,
);
const refreshAccessToken = createAsyncThunk(
  'refreshAccessToken',
  async (_, { rejectWithValue }) => {
    try {
      return;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
const logOut = createAsyncThunk(
  'logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      dispatch(LoaderThunk.showLoader());
      //Logout Service
      await resetKeychainPassword();
      removeAuthorizationHeaders();
      NavigationService.replace(ROUTES.Splash);
      dispatch(LoaderThunk.hideLoader());
      return;
    } catch (e) {
      dispatch(LoaderThunk.hideLoader());
      return rejectWithValue(e);
    }
  },
);

const retrieveToken = createAsyncThunk(
  'retrieveToken',
  async (_, { rejectWithValue, dispatch }) => {
    dispatch(LoaderThunk.showLoader());
    try {
      const firstTime = await AsyncStorage.getItem(
        ASYNC_STORAGE_KEY.AUTH.IsFirstTime,
      );
      if (firstTime !== null) {
        const accessToken = await getKeychainAccessToken();
        if (accessToken) {
          navigationRef?.current.dispatch(
            StackActions.replace(ROUTES.DashboardStack),
          );
        } else {
          navigationRef?.current.dispatch(
            StackActions.replace(ROUTES.AuthStack),
          );
        }
        dispatch(LoaderThunk.hideLoader());
      } else {
        dispatch(LoaderThunk.hideLoader());
        /**FRESH INSTALL **/
        // Since it will be null for the first time it comes to else block.
        await AsyncStorage.setItem(ASYNC_STORAGE_KEY.AUTH.IsFirstTime, 'true');
        const accessToken = await getKeychainAccessToken();
        //here it will check if any data is present in keychain. and then clear it off from the keychain itself.
        if (accessToken) {
          await dispatch(logOut());
          await resetKeychainPassword();
          removeAuthorizationHeaders();
        } else {
          navigationRef?.current.dispatch(StackActions.replace(ROUTES.Splash));
        }
      }
    } catch (e) {
      rejectWithValue(e);
    }
    return '';
  },
);

const AuthThunk = {
  login,
  logOut,
  retrieveToken,
  refreshAccessToken,
  changeLoginType,
};
export default AuthThunk;
