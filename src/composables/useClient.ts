import type { AxiosRequestConfig, AxiosInstance } from 'axios';
import axios from 'axios';
const client: AxiosInstance = axios.create({
  baseURL: 'http://localhost:9090/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function useClient() {
  async function get(url: string, config: AxiosRequestConfig = {}) {
    return client.get(url, config);
  }
  async function post(url: string, data: any, config: AxiosRequestConfig = {}) {
    return client.post(url, data, config);
  }
  async function put(url: string, config: AxiosRequestConfig = {}) {
    return client.put(url, config);
  }
  async function del(url: string, config: AxiosRequestConfig = {}) {
    return client.delete(url, config);
  }
  return { get, post, put, del };
}
