import { type AxiosInstance } from 'axios';
import { SyncThunk, dispatch } from '@app/redux';

let newBaseUrl = '';
export const setBaseUrl = (url: string) => {
  newBaseUrl = url;
};

export const applyAxiosRequestInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(async (config) => {
    //To detect which api is in progress
    dispatch(SyncThunk.currentSyncStatus(config.url));
    if (newBaseUrl) {
      config.baseURL = newBaseUrl;
    } else {
      const url = new URL(config.url);
      url.searchParams.append('api-ver', '1.0');
      config.url = url.toString();
    }
    return config;
  });
};

export const applyAxiosResponseInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      dispatch(SyncThunk.errorHandler(error));
      return await Promise.reject(error);
    },
  );
};

export default {
  applyAxiosRequestInterceptor,
  applyAxiosResponseInterceptor,
};
