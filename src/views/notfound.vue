<script setup lang="ts">
import { RouterLink } from "vue-router";
import NOTFOUND form "../assets/notfound.svg"
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="h-screen w-full flex justify-center items-center">
    <div class="w-[40rem] h-[30rem] flex justify-center flex-col items-center">
      <img :src="NOTFOUND" class="w-full h-full mb-8" />
      <div class="uppercase font-bold text-xl text-center mb-8">
        404 <span class="text-red-600"> page </span>
        not found
      </div>
      <router-link
        to="/"
        class="text-white bg-black rounded-xl py-3 px-4 text-xl font-bold inline-block cursor-pointer select-none"
      >
        <Icon
          icon="material-symbols:arrow-left-alt-rounded"
          class="inline text-3xl"
        />
        back to home
      </router-link>
    </div>
  </div>
</template>
<style scoped></style>
