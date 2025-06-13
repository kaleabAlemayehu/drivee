<!-- src/components/GoogleSignIn.vue -->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { loadGoogleScript } from '../utils/googleAuth';
import { useClient } from '../composables/useClient';
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/useUserStore';
import type { GoogleAuthResponse, GoogleAuth } from '../types/google';

const router = useRouter();
const userStore = useUserStore();
const { post } = useClient();
const emit = defineEmits<{
  (e: 'Error', message: string);
}>();

const buttonRef = ref<HTMLElement | null>(null);
const handleCredentialResponse = async (response: GoogleAuthResponse) => {
  // Send token to backend for verification
  console.log(response.credential);
  const data: GoogleAuth = {
    token: response.credential,
  } as GoogleAuth;
  const { message, err } = await userStore.setUser(data);
  if (err) {
    emit('Error', message);
  } else {
    router.push('/');
  }
};

onMounted(async () => {
  await loadGoogleScript();

  if (buttonRef.value && window.google?.accounts) {
    window.google.accounts.id.initialize({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
      ux_mode: 'popup',
    });

    window.google.accounts.id.renderButton(buttonRef.value, {
      theme: 'filled_black', // or 'filled_blue', 'filled_black'
      size: 'large', // or 'small', 'medium'
      shape: 'pill', // or 'rectangular', 'circle', 'square'
      text: 'continue_with', // or 'signup_with', 'continue_with', 'signin'
      logo_alignment: 'left', // or 'center'
      width: 500, // optional: sets fixed width
    });

    // Optional: Automatic sign-in prompt
    window.google.accounts.id.prompt();
  }
});
</script>

<template>
  <div ref="buttonRef" class="google-signin-container"></div>
</template>
