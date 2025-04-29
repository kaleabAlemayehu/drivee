<script setup lang="ts">
import NOTFOUND from '../assets/notfound.svg';
const props = defineProps(['message']);
</script>
<template>
  <div class="flex justify-center items-center w-full pt-56 pb-18">
    <div
      class="w-[40rem] h-[30rem] flex justify-center px-16 py-18 flex-col items-center"
    >
      <img :src="NOTFOUND" class="w-full h-full mb-8" />
      <span class="text-2xl font-semibold py-8 px-8">{{ props.message }}</span>
    </div>
  </div>
</template>

<style></style>
