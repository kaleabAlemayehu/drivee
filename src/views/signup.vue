<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

const schema = toTypedSchema(
  yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    policy: yup
      .bool()
      .oneOf([true], "must agree to terms and privacy policy to signup.")
      .required(),
  }),
);
const { handleSubmit, defineField, errors } = useForm({
  validationSchema: schema,
});
const [name, nameAttrs] = defineField("name");
const [email, emailAttrs] = defineField("email");
const [password, passwordAttrs] = defineField("password");
const [policy, policyAttrs] = defineField("policy");

function onInvalidSubmit({ values, errors, results }) {
  console.log(values); // current form values
  console.log(errors); // a map of field names and their first error message
  console.log(results); // a detailed map of field names and their validation results
}

const onSubmit = handleSubmit((values) => {
  console.log(values);
}, onInvalidSubmit);
</script>

<template>
  <div class="h-screen w-full flex w-hidden overflow-hidden">
    <div
      class="bg-cover bg-signup bg-center h-full object-none origin-center w-full bg-no-repeat m-0"
    >
      <div
        class="w-full bg-black/65 text-white h-full flex justify-center items-center mx-auto flex-col select-none"
      >
        <div class="text-5xl font-semibold mb-2">Welcome to Drivee &reg;</div>
        <div class="text-2xl spacing tracking-wider font-semibold mb-5">
          the best global carsharing marketplace
        </div>
        <div class="text-sm w-54/100 px-14 text-center mb-14">
          Have a car? Earn money as a Host. Rent your dream car as a Guest.
        </div>
        <div
          class="px-6 py-3 bg-white text-black rounded-md flex cursor-pointer"
        >
          <div class="font-bold text-xl capitalize">play video intro</div>
          <Icon
            icon="material-symbols:play-arrow-rounded"
            class="text-black text-3xl inline"
          />
        </div>
      </div>
    </div>
    <form
      @submit.prevent="onSubmit"
      class="h-full min-h-screen bg-white w-full xl:py-8 lg:py-4"
    >
      <div class="xl:w-3/5 lg:w-6/8 mx-auto">
        <div class="text-5xl font-bold capitalize xl:mb-4 lg:mb-1">Drivee</div>
        <div class="text-3xl font-bold capitalize xl:mb-1 lg:mb-0">
          Create An Account
        </div>
        <div class="text-gray-500 text-lg w-85/100 xl:mb-2 lg:mb-1">
          We'd love to have you on board. Join over 500+ customers around the
          globe and enhance productivity.
        </div>
        <div
          class="w-4/5 bg-gray-100 m-0 rounded-full flex items-center xl:px-6 lg:px-4 xl:py-5 lg:py-4 mb-2 cursor-pointer select-none"
        >
          <Icon icon="logos:facebook" class="text-3xl mr-18" />
          <div class="xl:text-xl lg:text-lg font-semibold text-gray-600">
            Continue with Facebook
          </div>
        </div>

        <div
          class="w-4/5 bg-gray-100 m-0 rounded-full flex items-center xl:px-6 lg:px-4 xl:py-5 lg:py-4 mb-2 cursor-pointer select-none"
        >
          <Icon icon="devicon:google" class="text-3xl mr-18" />
          <div class="xl:text-xl lg:text-lg font-semibold text-gray-600">
            Continue with Google
          </div>
        </div>
        <div
          class="w-3/4 border-[1px] border-transparent border-t-gray-100 flex flex-col py-4"
        >
          <div class="w-full mb-1">
            <div class="font-semibold text-xl mb-3">
              Name <span class="text-red-500">*</span>
            </div>
            <input
              type="text"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full"
              placeholder="Enter Your Name"
              v-model="name"
              v-bind="nameAttrs"
            />
            <div class="text-red-500">{{ errors.name }}</div>
          </div>

          <div class="w-full my-1">
            <div class="font-semibold text-xl mb-3">
              Email <span class="text-red-500">*</span>
            </div>
            <input
              type="text"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full"
              placeholder="Enter Your Email"
              v-model="email"
              v-bind="emailAttrs"
            />
            <div class="text-red-500">{{ errors.email }}</div>
          </div>

          <div class="w-full my-1">
            <div class="font-semibold text-xl mb-3">
              Password <span class="text-red-500">*</span>
            </div>
            <input
              type="password"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full"
              placeholder="Enter Your Password"
              v-model="password"
              v-bind="passwordAttrs"
            />
            <div class="text-red-500">{{ errors.password }}</div>
          </div>

          <div class="flex items-center justify-start mt-5 mb-3">
            <input
              type="checkbox"
              class="size-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl mr-4 cursor-pointer"
              v-model="policy"
              v-bind="policyAttrs"
            />

            <div class="lable-agree inline-block">
              I agree to the
              <span class="capitalize underline cursor-pointer"
                >terms and privacy policy.</span
              >
            </div>
          </div>

          <div class="text-red-500">{{ errors.policy }}</div>
          <button
            class="w-full font-semibold cursor-pointer my-4 py-5 px-8 text-center select-none bg-black rounded-lg text-white"
            type="submit"
          >
            Sign up
          </button>
          <div class="capitalize">
            already have an account?
            <span class="underline cursor-pointer">login here</span>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<style scoped></style>
