import { APP_END_POINT } from '@config/app-config';
import axios from 'axios';
import Config from 'react-native-config';
import { commonHeader } from './service-utils';
import { applyAxiosRequestInterceptor } from './axios-utils';

const api = axios.create({
  baseURL: Config.BASE_URL,
  headers: {
    ...commonHeader,
  },
});

const login = async (body: any) => {
  const { Username, Password } = body;
  try {
    if (Username === 'Jhon' && Password === 'Doe') {
      const _fakeResponse = {
        data: {
          userId: 1,
          username: 'John Doe',
          token: '_token',
        },
        status: 200,
        statusText: 'OK',
      };

      return _fakeResponse;
    } else {
      const _fakeErrorResponse = {
        status: 401,
        statusText: 'Unauthorized',
        data: {
          message: 'Invalid username or password',
        },
      };

      return _fakeErrorResponse;
    }
  } catch (error: any) {
    console.warn(error);
  }
};

const refreshAccessToken = async () => {};

const logout = async (body: any) => {
  const { accessToken, BaordId } = body;
  try {
    const response = await api.post(
      `${APP_END_POINT.AUTH.LogOut}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          BW_MACID: BaordId,
        },
      },
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};

applyAxiosRequestInterceptor(api);

const AuthService = {
  api,
  login,
  refreshAccessToken,
  logout,
};

export default AuthService;
