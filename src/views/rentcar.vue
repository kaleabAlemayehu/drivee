<script setup lang="ts">
import { type Ref, ref, onBeforeMount } from 'vue';
import type { CarCardProps } from '../types/index';
import { useClient } from '../composables/useClient';
import CarCard from '../components/CarCard.vue';
import SkeletonCard from '../components/SkeletonCard.vue';
import IsError from '../components/IsError.vue';
import mapImage from './../assets/map.svg';
import rentCarImage from '../assets/rentcar.png';
import NOTFOUND from '../assets/notfound.svg';

const isLoading = ref(true);
const isError = ref(false);
const cars: Ref<CarCardProps[]> = ref([]);
const { get } = useClient();
onBeforeMount(async () => {
  try {
    const { data } = await get('/cars/');
    if (data.status == 'success') {
      console.log(data);
      isLoading.value = false;
      cars.value = data.message;
    } else {
      setTimeout(() => {
        isLoading.value = false;
        isError.value = true;
      }, 1000);
    }
  } catch (error) {
    setTimeout(() => {
      isLoading.value = false;
      isError.value = true;
    }, 2000);
  }
});
</script>
<template>
  <div
    class="h-[calc(100vh-20rem)] w-full bg-black relative overflow-hidden text-white flex justify-center items-center -z-10"
  >
    <div class="flex mx-auto min-w-5/6 px-10 justify-center">
      <div class="text-5xl leading-22 text-center font-semibold capitalize">
        Rent a car, rent your freedom
      </div>

      <img :src="mapImage" alt="" class="absolute top-50 -left-40 z-10 m-0" />

      <img
        :src="rentCarImage"
        alt=""
        class="w-200 transform rotate-y-180 absolute -top-10 right-0 z-200 m-0"
      />
    </div>
  </div>
  <div class="bg-white relative m-0 p-0">
    <div
      class="absolute bg-white h-48 rounded-lg shadow-gray-200 shadow-lg w-5/6 -bottom-25 z-50! left-0 right-0 mx-auto"
    ></div>
  </div>
  <IsError v-if="isError" message="Unable to Fetch Cars" />
  <div class="w-full bg-gray-100 pt-56 pb-18" v-else>
    <div
      class="grid grid-cols-4 grid-row-3 gap-6 w-6/7 mx-auto"
      v-if="isLoading"
    >
      <SkeletonCard v-for="i in 12" :i="i" v-bind:key="i" />
    </div>
    <div class="grid grid-cols-4 grid-row-3 gap-6 w-6/7 mx-auto" v-else>
      <CarCard v-for="c in cars" v-bind="c as any" v-bind:key="c" />
    </div>
  </div>
</template>
<style scoped></style>
