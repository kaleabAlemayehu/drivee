<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import { useUserStore } from '../store/useUserStore';
import LoadingIcon from '../components/icons/Loading.vue';
import GoogleLogin from '../components/GoogleLogin.vue';

const router = useRouter();
const userStore = useUserStore();
const submitErr = ref(null);
const isLoading = ref(false);
const schema = toTypedSchema(
  yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    rememberMe: yup.bool(),
  }),
);
const handleError = (message: string) => {
  submitErr.value = message;
};
const { handleSubmit, defineField, errors, setValues } = useForm({
  validationSchema: schema,
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');
const [rememberMe, _] = defineField('rememberMe');

const onSubmit = handleSubmit(async (values) => {
  isLoading.value = true;
  const { message, err } = await userStore.login(
    values.email.toLowerCase(),
    values.password,
    values.rememberMe as boolean,
  );
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
  if (err) {
    submitErr.value = message;
  } else {
    setValues({
      email: '',
      password: '',
      rememberMe: false,
    });
  }
  router.push({ path: '/', replace: true });
});
onBeforeMount(() => {
  if (userStore.user) {
    router.push({ path: '/', replace: true });
  }
});
</script>
<template>
  <div class="h-screen w-full flex flex-col lg:flex-row overflow-hidden">
    <!-- Background Section -->
    <div
      class="hidden lg:block bg-cover bg-signup bg-center h-full object-none origin-center w-full lg:w-1/2 bg-no-repeat"
    >
      <div
        class="w-full bg-black/65 text-white h-full flex justify-center items-center mx-auto flex-col select-none px-4"
      >
        <div class="text-3xl xl:text-5xl font-semibold mb-2 text-center">
          Welcome to Drivee &reg;
        </div>
        <div
          class="text-lg xl:text-2xl tracking-wider font-semibold mb-5 text-center"
        >
          the best global carsharing marketplace
        </div>
        <div class="text-sm w-3/4 xl:w-54/100 text-center mb-14">
          Have a car? Earn money as a Host. Rent your dream car as a Guest.
        </div>
        <div
          class="px-6 py-3 bg-white text-black rounded-md flex cursor-pointer items-center"
        >
          <div class="font-bold text-xl capitalize">play video intro</div>
          <Icon
            icon="material-symbols:play-arrow-rounded"
            class="text-black text-3xl ml-2"
          />
        </div>
      </div>
    </div>

    <!-- Form Section -->
    <form
      @submit.prevent="onSubmit"
      class="h-full min-h-screen bg-white w-full lg:w-1/2 px-4 sm:px-6 lg:px-8 xl:px-16 py-6 lg:py-8 overflow-y-auto"
    >
      <div class="w-full max-w-lg mx-auto lg:max-w-none xl:w-3/5">
        <!-- Header -->
        <div class="mb-6">
          <div
            class="text-3xl sm:text-4xl xl:text-5xl font-bold capitalize mb-2 xl:mb-4"
          >
            Drivee
          </div>
          <div class="text-2xl sm:text-3xl font-bold capitalize mb-2 xl:mb-1">
            Welcome Back
          </div>
          <div class="text-gray-500 text-base sm:text-lg w-full xl:mb-2">
            Sign in to your account to continue your journey with us and access
            your personalized experience.
          </div>
        </div>

        <!-- Social Login Buttons -->
        <div class="space-y-3 mb-6">
          <div
            class="w-full sm:w-4/5 bg-gray-100 rounded-full flex items-center px-2 xl:px-4 py-4 xl:py-3 cursor-pointer select-none hover:bg-gray-200 transition-colors"
          >
            <Icon
              icon="logos:facebook"
              class="text-xl xl:text-3xl mr-4 sm:mr-18"
            />
            <div class="text-sm xl:text-lg font-semibold text-gray-600">
              Continue with Facebook
            </div>
          </div>

          <!-- <div -->
          <!--   class="w-full sm:w-4/5 bg-gray-100 rounded-full flex items-center px-4 xl:px-6 py-4 xl:py-5 cursor-pointer select-none hover:bg-gray-200 transition-colors" -->
          <!-- > -->
          <!--   <Icon -->
          <!--     icon="devicon:google" -->
          <!--     class="text-2xl xl:text-3xl mr-4 sm:mr-18" -->
          <!--   /> -->
          <!--   <div class="text-base xl:text-xl font-semibold text-gray-600"> -->
          <!--     Continue with Google -->
          <!--   </div> -->
          <!-- </div> -->
          <GoogleLogin @error="handleError" />
        </div>

        <!-- Form Fields Container -->
        <div class="w-full sm:w-3/4 border-t border-gray-100 pt-6">
          <!-- Email Field -->
          <div class="w-full mb-4">
            <div class="font-semibold text-lg xl:text-xl mb-3">
              Email <span class="text-red-500">*</span>
            </div>
            <input
              type="email"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter Your Email"
              v-model="email"
              v-bind="emailAttrs"
            />
            <div class="text-red-500 text-sm mt-1">{{ errors.email }}</div>
          </div>

          <!-- Password Field -->
          <div class="w-full mb-6">
            <div class="font-semibold text-lg xl:text-xl mb-3">
              Password <span class="text-red-500">*</span>
            </div>
            <input
              type="password"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="Enter Your Password"
              v-model="password"
              v-bind="passwordAttrs"
            />
            <div class="text-red-500 text-sm mt-1">{{ errors.password }}</div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div
            class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3"
          >
            <div class="flex items-center">
              <input
                type="checkbox"
                class="size-4 text-blue-600 bg-gray-100 border-gray-300 rounded mr-3 cursor-pointer"
                v-model="rememberMe"
              />
              <label class="text-gray-600 text-sm sm:text-base"
                >Remember me</label
              >
            </div>
            <router-link
              to="/request-reset"
              class="underline cursor-pointer text-sm sm:text-base"
            >
              Forgot password?
            </router-link>
          </div>

          <!-- Error Message -->
          <div class="text-red-500 text-center mb-4">{{ submitErr }}</div>

          <!-- Submit Button -->
          <button
            v-if="isLoading"
            class="w-full cursor-not-allowed font-semibold py-4 xl:py-5 px-6 xl:px-8 text-center select-none bg-black rounded-lg text-white mb-4"
            type="submit"
            disabled
          >
            <LoadingIcon />
          </button>

          <button
            v-else
            class="w-full font-semibold cursor-pointer py-4 xl:py-5 px-6 xl:px-8 text-center select-none bg-black rounded-lg text-white mb-4 hover:bg-gray-800 transition-colors"
            type="submit"
          >
            Sign In
          </button>

          <!-- Signup Link -->
          <div class="text-sm sm:text-base">
            Don't have an account?
            <router-link to="/signup" class="underline cursor-pointer">
              sign up here
            </router-link>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
