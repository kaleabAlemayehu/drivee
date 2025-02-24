<script setup lang="ts"></script>
<template>
  <div
    class="col-span-6 row-span-5 h-min border-gray-200 border-2 rounded-xl grid grid-cols-2 grid-rows-3 px-16 py-8 gap-x-10 gap-y-8"
  >
    <div class="username">
      <label for="user_name" class="font-semibold text-lg capitalize block mb-2"
        >Username</label
      >
      <input
        type="text"
        name="username"
        class="p-4 rounded-lg outline-none w-full ring-0 border-gray-200 bg-gray-100 border-[1px]"
        placeholder="Enter Username"
      />
    </div>
    <div class="email">
      <label for="email" class="font-semibold text-lg capitalize block mb-2"
        >Email</label
      >
      <input
        type="text"
        name="email"
        class="p-4 rounded-lg outline-none w-full ring-0 border-gray-200 bg-gray-100 border-[1px]"
        placeholder="Enter Email"
      />
    </div>
    <div class="password">
      <label for="password" class="font-semibold text-lg capitalize block mb-2"
        >New Password</label
      >
      <input
        type="password"
        name="password"
        class="p-4 rounded-lg outline-none w-full ring-0 border-gray-200 bg-gray-100 border-[1px]"
        placeholder="***************"
      />
    </div>
    <div class="confirm_password">
      <label
        for="confirm_password"
        class="font-semibold text-lg capitalize block mb-2"
        >Re-Enter Password</label
      >
      <input
        type="password"
        name="confirm_password"
        class="p-4 rounded-lg outline-none w-full ring-0 border-gray-200 bg-gray-100 border-[1px]"
        placeholder="***************"
      />
    </div>

    <div
      class="bg-black text-white text-xl rounded-lg px-3 py-4 capitalize select-none h-min inline-block w-46 cursor-pointer text-center"
    >
      Update Profile
    </div>
  </div>
</template>
<style scoped></style>
