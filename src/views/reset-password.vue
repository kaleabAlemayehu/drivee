<script setup lang="ts">
import { ref, watch, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useClient } from '../composables/useClient';
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import LoadingIcon from '../components/icons/Loading.vue';
const schema = toTypedSchema(
  yup.object({
    newPassword: yup.string().min(8).required(),
    confirmPassword: yup
      .string()
      .min(8)
      .required()
      .oneOf([yup.ref('newPassword')], 'Passwords do not match'),
  }),
);
const { handleSubmit, defineField, errors } = useForm({
  validationSchema: schema,
});
const isError = ref(false);
const errorMessage = ref(null);
const isLoading = ref(true);
const userInfo = ref(null);
const { post } = useClient();
const isSubmitting = ref(false);
const submissionMessage = ref(null);
const submissionSuccess = ref(null);
const [newPassword, newPasswordAttr] = defineField('newPassword');
const [confirmPassword, confirmPasswordAttr] = defineField('confirmPassword');
const onSubmit = handleSubmit(async (value) => {
  isSubmitting.value = true;
  try {
    const res = await post('/reset-password', {
      password: value.newPassword,
      userID: userInfo.value.user_id,
      token: userInfo.value.token,
    });
    console.log(res.data);
    setTimeout(() => {
      isSubmitting.value = false;
      submissionMessage.value = 'success';
      submissionSuccess.value = true;
    }, 3000);
  } catch (error: any) {
    console.log(error);
  }
});
const route = useRoute();
const router = useRouter();
onBeforeMount(async () => {
  try {
    const data = {
      token: route.query.token,
    };
    if (data.token) {
      const res = await post('/verify-token', data);
      if (res.data.status === 'success') {
        userInfo.value = res.data.message;
        isLoading.value = false;
        router.replace('/reset-password/');
        console.log(userInfo.value);
      } else {
        console.log(res.data.message);
      }
    } else {
      router.push('/');
    }
  } catch (error: any) {
    isError.value = true;
    errorMessage.value = error.response.data.message;
    setTimeout(() => {
      isLoading.value = false;
    }, 1000);

    setTimeout(() => {
      router.push('/');
    }, 3000);
  }
});
</script>
<template>
  <div class="bg-world h-screen w-full bg-cover bg-no-repeat">
    <div class="bg-white/50 w-full h-full flex justify-center items-center p-4">
      <div
        v-if="isLoading"
        class="h-[26.5rem] rounded-xl bg-white flex justify-center items-center w-full max-w-md p-6 sm:p-8"
      >
        <LoadingIcon />
      </div>

      <div
        v-else-if="isError && !isLoading"
        class="h-[26.5rem] rounded-xl bg-white flex justify-center items-center w-full max-w-md p-6 sm:p-8"
      >
        <div
          class="px-6 py-3 rounded-md text-lg bg-red-100 text-red-700': !submissionSuccess, }"
        >
          {{ errorMessage }}
        </div>
      </div>

      <div
        v-else
        class="rounded-xl bg-white flex flex-col w-full max-w-md p-6 sm:p-8"
      >
        <h2
          class="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6"
        >
          Reset Your Password
        </h2>

        <form @submit.prevent="onSubmit" class="w-full">
          <!-- New Password Field -->
          <div class="mb-6">
            <label
              for="newPassword"
              class="block text-gray-700 text-sm font-semibold mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              v-model="newPassword"
              class="p-3 w-full outline-none border border-gray-400 rounded-lg transition"
              :class="{
                'border-red-500': errors.newPassword,
                'focus:border-blue-500': !errors.newPassword,
              }"
              placeholder="Enter new password"
              required
              @input="validatePassword"
            />
            <p v-if="errors.newPassword" class="text-red-500 text-xs mt-1">
              {{ errors.newPassword }}
            </p>
          </div>

          <!-- Confirm Password Field -->
          <div class="mb-8">
            <label
              for="confirmPassword"
              class="block text-gray-700 text-sm font-semibold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              class="p-3 w-full outline-none border border-gray-400 rounded-lg transition"
              :class="{
                'border-red-500': errors.confirmPassword,
                'focus:border-blue-500': !errors.confirmPassword,
              }"
              placeholder="Confirm your password"
              required
              @input="validatePasswordMatch"
            />
            <p v-if="errors.confirmPassword" class="text-red-500 text-xs mt-1">
              {{ errors.confirmPassword }}
            </p>
          </div>

          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-black text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800"
          >
            {{ isSubmitting ? 'Updating...' : 'Reset Password' }}
          </button>

          <div
            v-if="submissionMessage"
            class="mt-4 p-3 rounded-md text-sm"
            :class="{
              'bg-green-100 text-green-700': submissionSuccess,
              'bg-red-100 text-red-700': !submissionSuccess,
            }"
          >
            {{ submissionMessage }}
          </div>
        </form>

        <p class="text-center text-gray-600 text-sm mt-6">
          Remembered your password?
          <router-link
            to="/signin"
            class="text-gray-800 hover:text-gray-900 font-semibold transition-colors duration-200"
          >
            Sign In
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
