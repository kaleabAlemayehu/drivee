<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="w-4/10 rounded-xl bg-white py-8 px-16 flex flex-col">
    <div class="">
      <div class="text-2xl font-semibold">Get Started</div>
      <div class="text-lg capitalize text-gray-800">
        submit the form to start
      </div>
    </div>
    <div class="py-8 mt-10 px-0 mx-0 flex flex-col">
      <div class="relative mb-16">
        <input
          id="first_name"
          name="first_name"
          type="text"
          class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-600"
          placeholder="Linus"
        />
        <label
          for="first_name"
          class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >First Name &nbsp;<span class="text-red-600">*</span></label
        >
      </div>

      <div class="relative mb-16">
        <input
          id="last_name"
          name="last_name"
          type="text"
          class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-600"
          placeholder="Trovalds"
        />
        <label
          for="last_name"
          class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >Last Name&nbsp;<span class="text-red-600">*</span></label
        >
      </div>

      <div class="relative mb-16">
        <input
          id="email"
          name="email"
          type="email"
          class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-600"
          placeholder="linus@linux.com"
        />
        <label
          for="email"
          class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >Email&nbsp;<span class="text-red-600">*</span></label
        >
      </div>
      <div class="relative mb-16">
        <input
          id="phone_number"
          name="phone_number"
          type="text"
          class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-600"
          placeholder="+251912345678"
        />
        <label
          for="phone_number"
          class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >Phone Number&nbsp;<span class="text-red-600">*</span></label
        >
      </div>

      <div class="relative mb-16">
        <input
          id="zip_code"
          name="zip_code"
          type="text"
          class="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-gray-600"
          placeholder="6000"
        />
        <label
          for="zip_code"
          class="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >Zip Code &nbsp;<span class="text-red-600">*</span></label
        >
      </div>
      <div
        class="bg-black rounded-lg text-white w-min py-2 px-6 self-end flex items-center cursor-pointer"
      >
        <Icon
          icon="material-symbols:arrow-right-alt"
          class="inline-block ml-8 mr-2 text-5xl"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
