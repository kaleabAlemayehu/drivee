<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useClient } from '../composables/useClient';
import { toTypedSchema } from '@vee-validate/yup';
import { useForm } from 'vee-validate';
import * as yup from 'yup';
import LoadingIcon from '../components/icons/Loading.vue';
const schema = toTypedSchema(
  yup.object({
    email: yup.string().email().required(),
  }),
);
const { handleSubmit, defineField, errors, resetForm } = useForm({
  validationSchema: schema,
});
const { post } = useClient();
const isSubmitting = ref(false);
const submissionMessage = ref(null);
const submissionSuccess = ref<null | boolean>(null);
const router = useRouter();
const [email, emailAttr] = defineField('email');
const onSubmit = handleSubmit(async (value) => {
  isSubmitting.value = true;
  try {
    const res = await post(
      '/request-reset',
      {
        email: value.email,
      },
      { timeout: 10000 },
    );
    console.log(res.data);
    isSubmitting.value = false;
    submissionMessage.value = res.data.message;
    submissionSuccess.value = true;
    setTimeout(() => {
      router.push('/');
    }, 3000);
  } catch (error: any) {
    isSubmitting.value = false;
    if (error.response) {
      submissionMessage.value = error.response.data.message;
      submissionSuccess.value = true;
    } else {
      submissionMessage.value = error.message;
      submissionSuccess.value = false;
    }
    resetForm();
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }
});
</script>
<template>
  <div class="bg-world h-screen w-full bg-cover bg-no-repeat">
    <div class="bg-white/50 w-full h-full flex justify-center items-center">
      <div
        class="rounded-xl row-span-3 h-[calc(100vh-16rem)] bg-white flex justify-center items-center flex-col w-full max-w-xl"
      >
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">
          Forget Your Password?
        </h2>
        <p class="text-center text-gray-700 mb-8 px-12">
          Enter your email address below and we'll send you a link to reset your
          password.
        </p>

        <form @submit.prevent="onSubmit" class="w-8/10">
          <div class="mb-6">
            <label
              for="email"
              class="block text-gray-700 text-sm font-semibold mb-2"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              v-model="email"
              v-bind="emailAttr"
              class="p-4 w-full outline-none ring-0 border-[1px] border-gray-400 rounded-lg"
              :class="{
                'border-red-500': errors.email,
                'border-gray-500': !errors.email,
              }"
              placeholder="your.email@example.com"
              required
              aria-describedby="email-error"
            />
            <p
              v-if="errors.email"
              id="email-error"
              class="text-red-500 text-xs mt-1"
            >
              {{ errors.email }}
            </p>
          </div>

          <button
            v-if="isSubmitting"
            class="w-full bg-black hover:bg-black text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            disabled
          >
            <LoadingIcon />
          </button>

          <button
            v-else
            type="submit"
            class="w-full bg-black hover:bg-black text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition-all duration-200 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
          >
            Send Reset Link
          </button>
          <p class="text-center text-gray-600 text-sm mt-6">
            Remembered your password?
            <router-link
              to="/signin"
              class="text-gray-800 hover:text-gray-900 font-semibold transition-colors duration-200 inline-block pb-8"
            >
              Sign In
            </router-link>
          </p>

          <div
            v-if="submissionMessage"
            class="p-3 rounded-md text-sm"
            :class="{
              'bg-green-100 text-green-700': submissionSuccess,
              'bg-red-100 text-red-700': !submissionSuccess,
            }"
          >
            {{ submissionMessage }}
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
