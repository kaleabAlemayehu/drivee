<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useClient } from '../composables/useClient';
import type { AxiosError } from 'axios';
const { get } = useClient();
const handleClick = async () => {
  try {
    const res = await get('/auth/x/pkce');
    console.log(res.data);
  } catch (error: any | AxiosError) {
    console.log(error);
  }
};
</script>
<template>
  <div
    @click="handleClick"
    class="w-[400px] bg-black text-white rounded-full px-1 py-[0.6rem] cursor-pointer select-none hover:bg-stone-700 transition-colors flex justify-center items-center"
  >
    <div class="w-10 mr-12"></div>
    <div class="text-sm font-normal text-white">Continue with</div>

    <Icon icon="logos:x" class="text-lg sm:mr-15 fill-white ml-4" />
  </div>
</template>
<style></style>
