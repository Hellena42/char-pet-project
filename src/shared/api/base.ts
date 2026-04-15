import axios from 'axios';
import { storage } from '../lib/browser/localStorage';

export const $api = axios.create({
  baseURL: 'api'
});

const authUrls = ['/auth/login', '/auth/register'];

const isUrlIncluded = (config: any) => {
  return config.url && !authUrls.includes(config.url);
}

$api.interceptors.request.use((config) => {
  const token = storage.get('token');

  if (token && isUrlIncluded(config)) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

$api.interceptors.response.use(
  (resp) => resp,
  (error) => {
    const status = error?.response?.status;
    const config = error?.config;

    if (status === 401 && isUrlIncluded(config)) {
      alert('Token is expired or invalid')
    }

    return Promise.reject(error);
  }
);