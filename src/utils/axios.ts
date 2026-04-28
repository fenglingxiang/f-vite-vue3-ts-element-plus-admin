import axios, { type AxiosRequestConfig } from 'axios';

const env = import.meta.env;
const baseConfig = {
  baseURL: env.VITE_AXIOS_BASE_URL,
  timeout: env.VITE_AXIOS_TIME_OUT,
};

const instance = axios.create(baseConfig);

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((res) => {
  return res.data.data;
});

function service<T = any>(
  config: AxiosRequestConfig = {
    method: 'GET',
  }
): Promise<T> {
  config.headers = {
    'Content-Type': 'application/json',
  };
  if (config.method === 'get' || config.method === 'GET') {
    config.headers!['Content-Type'] = 'application/x-www-form-urlencoded';
    config.params = config.data;
  }
  const reqConfig = {
    ...baseConfig,
    ...config,
  };
  return instance(reqConfig);
}

export default service;
