import axios, { AxiosError } from 'axios';
import type { SignupInputs } from '../types';
const client = axios.create({
  baseURL: 'http://localhost:9090/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    // "Authorization": state.user.token
  },
});

export function useClient() {
  async function get(url: string, config = {}) {
    return client.get(url, config);
  }
  async function post(url: string, data: SignupInputs, config = {}) {
    let message,
      isErr = false;
    try {
      var res = await client.post(url, data, config);
      if (res.data.status == 'error') {
        isErr = true;
      }
      message = res.data.message;
    } catch (error: any | AxiosError) {
      message = error.response.data.message;
      isErr = true;
    }
    return { message: message, err: isErr };
  }
  async function put(url: string, config = {}) {
    return client.put(url, config);
  }
  async function del(url: string, config = {}) {
    return client.delete(url, config);
  }
  return { get, post, put, del };
}
