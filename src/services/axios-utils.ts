import { type AxiosInstance } from 'axios';

export const applyAxiosRequestInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(async (config) => config);
};

export const applyAxiosResponseInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    async function (error) {
      return await Promise.reject(error);
    },
  );
};

export default {
  applyAxiosRequestInterceptor,
  applyAxiosResponseInterceptor,
};
