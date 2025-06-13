import { defineStore } from 'pinia';
import type { AxiosError } from 'axios';
import { useClient } from '../composables/useClient';
import type { LoginInputs, SignupInputs } from '../types/auth';
import type { GoogleAuth } from '../types/google';

const client = useClient();
export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
  }),
  getters: {
    isAuthincated: (state) => !!state.user,
  },
  actions: {
    async setUser(data: GoogleAuth) {
      let message;
      try {
        const res = await client.post('/auth/google', data);
        message = res.data.message;
        if (res.data.status == 'error') {
          return { message: message, err: true };
        }
        this.user = message;
        localStorage.setItem('user', JSON.stringify(message));
        return { message: message, err: false };
      } catch (error: any | AxiosError) {
        message = error.response.data.message;
        return { message: message, err: true };
      }
    },
    async signup(name: string, email: string, password: string) {
      let message;
      try {
        const data: SignupInputs = {
          first_name: name,
          email: email,
          password: password,
        };
        let res = await client.post('/register', data);

        message = res.data.message;
        if (res.data.status == 'error') {
          return { message: message, err: true };
        }
        this.user = message;
        localStorage.setItem('user', JSON.stringify(message));

        return { message: message, err: false };
      } catch (error: any | AxiosError) {
        message = error.response.data.message;
        return { message: message, err: true };
      }
    },
    async login(email: string, password: string, rememberMe: boolean) {
      let message;
      try {
        const data: LoginInputs = {
          email: email,
          password: password,
          rememberMe: rememberMe,
        };
        let res = await client.post('/login', data);
        message = res.data.message;
        if (res.data.status === 'error') {
          return { message, err: true };
        }
        this.user = message;
        localStorage.setItem('user', JSON.stringify(message));
        return { message, err: false };
      } catch (error: any | AxiosError) {
        message = error.response.data.message;
        return { message: message, err: true };
      }
    },
    logout() {
      // clear user data
      this.user = null;
      localStorage.removeItem('user');
    },
  },
});
