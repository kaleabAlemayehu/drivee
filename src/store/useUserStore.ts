import { defineStore } from 'pinia';
import { useClient } from '../composables/useClient';
import type { SignupInputs } from '../types';

const client = useClient();
export const useUserStore = defineStore('user', {
  state: () => ({
    // user: JSON.parse(localStorage.getItem("user") || null),
    user: null,
  }),
  getters: {
    isAuthincated: (state) => !!state.user,
  },
  actions: {
    async signup(name: string, email: string, password: string) {
      // make request to signup
      const data: SignupInputs = {
        first_name: name,
        email: email,
        password: password,
      };
      let { message, err } = await client.post('/register', data);
      if (!err) {
        localStorage.setItem('user', message);
      }
      return { message: message, err: err };
    },
    login() {
      // make request to login
    },
    logout() {
      // clear user data
    },
  },
});
