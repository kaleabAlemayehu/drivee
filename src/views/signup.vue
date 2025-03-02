<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="h-screen w-full flex w-hidden">
    <div
      class="bg-cover bg-[url(/signup.jpeg)] bg-center h-full object-none origin-center w-full bg-no-repeat m-0"
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
    <div class="h-full bg-white w-full py-8">
      <div class="w-3/5 mx-auto">
        <div class="text-5xl font-bold capitalize mb-6">Drivee</div>
        <div class="text-3xl font-bold capitalize mb-2">Create An Account</div>
        <div class="text-gray-500 text-lg w-85/100 mb-4">
          We'd love to have you on board. Join over 500+ customers around the
          globe and enhance productivity.
        </div>
        <div
          class="w-4/5 bg-gray-100 m-0 rounded-full flex items-center px-6 py-5 mb-3 cursor-pointer select-none"
        >
          <Icon icon="logos:facebook" class="text-3xl mr-18" />
          <div class="text-xl font-semibold text-gray-600">
            Continue with Facebook
          </div>
        </div>

        <div
          class="w-4/5 bg-gray-100 m-0 rounded-full flex items-center px-6 py-5 mb-3 cursor-pointer select-none"
        >
          <Icon icon="devicon:google" class="text-3xl mr-18" />
          <div class="text-xl font-semibold text-gray-600">
            Continue with Google
          </div>
        </div>
        <div
          class="w-3/4 border-[1px] border-transparent border-t-gray-100 flex flex-col py-4"
        >
          <div class="w-full mb-2">
            <div class="font-semibold text-xl mb-3">
              Name <span class="text-red-500">*</span>
            </div>
            <input
              type="text"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full"
              placeholder="Enter Your Name"
            />
          </div>

          <div class="w-full my-2">
            <div class="font-semibold text-xl mb-3">
              Email <span class="text-red-500">*</span>
            </div>
            <input
              type="text"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full"
              placeholder="Enter Your Email"
            />
          </div>

          <div class="w-full my-2">
            <div class="font-semibold text-xl mb-3">
              Password <span class="text-red-500">*</span>
            </div>
            <input
              type="password"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full"
              placeholder="Enter Your Password"
            />
          </div>

          <div class="flex items-center justify-start mt-5 mb-3">
            <input
              type="checkbox"
              class="size-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl mr-4 cursor-pointer"
            />

            <div class="lable-agree inline-block">
              I agree to the
              <span class="capitalize underline cursor-pointer"
                >terms and privacy policy.</span
              >
            </div>
          </div>

          <div
            class="w-full font-semibold cursor-pointer my-8 py-5 px-8 text-center select-none bg-black rounded-lg text-white"
          >
            Sign up
          </div>
          <div class="capitalize">
            already have an account?
            <span class="underline cursor-pointer">login here</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
