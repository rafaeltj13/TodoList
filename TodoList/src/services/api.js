import axios from 'axios';
import { getToken } from './auth';

const url = 'http://localhost:4040/api/'

const Api = axios.create({
  baseURL: `${url}`,
});

Api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default Api;