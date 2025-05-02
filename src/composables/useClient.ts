import axios from 'axios';
const client = axios.create({
  baseURL: 'http://localhost:9090/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function useClient() {
  async function get(url: string, config = {}) {
    console.log('config', config.Headers);
    return client.get(url, config.Headers);
  }
  async function post(url: string, data: any, config = {}) {
    return client.post(url, data, config);
  }
  async function put(url: string, config = {}) {
    return client.put(url, config);
  }
  async function del(url: string, config = {}) {
    return client.delete(url, config);
  }
  return { get, post, put, del };
}
