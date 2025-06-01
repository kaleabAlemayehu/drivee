import { defineStore } from 'pinia';
import type { AxiosError } from 'axios';
import { useClient } from '../composables/useClient';
import type { LoginInputs, SignupInputs } from '../types/auth';

const client = useClient();
export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') || 'null'),
  }),
  getters: {
    isAuthincated: (state) => !!state.user,
  },
  actions: {
    async signup(name: string, email: string, password: string) {
      // make request to signup
      let message,
        isErr = false;
      try {
        const data: SignupInputs = {
          first_name: name,
          email: email,
          password: password,
        };
        let res = await client.post('/register', data);

        message = res.data.message;
        if (res.data.status == 'error') {
          isErr = true;
          return { message: message, err: isErr };
        }
        this.user = message;
        localStorage.setItem('user', JSON.stringify(message));

        return { message: message, err: isErr };
      } catch (error: any | AxiosError) {
        message = error.response.data.message;
        isErr = true;
        return { message: message, err: isErr };
      }
    },
    async login(email: string, password: string, rememberMe: boolean) {
      let message,
        isErr = false;
      try {
        const data: LoginInputs = {
          email: email,
          password: password,
          rememberMe: rememberMe,
        };
        let res = await client.post('/login', data);
        message = res.data.message;
        if (res.data.status === 'error') {
          isErr = true;
          return { message, err: isErr };
        }
        this.user = message;
        localStorage.setItem('user', JSON.stringify(message));
        return { message, err: isErr };
      } catch (error: any | AxiosError) {
        message = error.response.data.message;
        isErr = true;
        return { message: message, err: isErr };
      }
      // make request to login
    },
    logout() {
      // clear user data
      this.user = null;
      localStorage.removeItem('user');
    },
  },
});
