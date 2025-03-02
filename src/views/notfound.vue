<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="h-screen w-full flex justify-center items-center">
    <div class="w-[40rem] h-[30rem] flex justify-center flex-col items-center">
      <img src="/notfound.svg" class="w-full h-full mb-8" />
      <div class="uppercase font-bold text-xl text-center mb-8">
        404 <span class="text-red-600"> page </span>
        not found
      </div>
      <div
        class="text-white bg-black rounded-xl py-3 px-4 text-xl font-bold inline-block cursor-pointer select-none"
      >
        <Icon
          icon="material-symbols:arrow-left-alt-rounded"
          class="inline text-3xl"
        />
        back to home
      </div>
    </div>
  </div>
</template>
<style scoped></style>
