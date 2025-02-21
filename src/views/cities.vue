<script setup lang="ts">
import { Icon } from "@iconify/vue";
import Carousel from "../components/Carousel.vue";
</script>
<template>
  <div
    class="h-[calc(100vh-10rem)] w-full bg-[url(/cities.jpeg)] bg-center bg-cover bg-no-repeat flex justify-center items-center"
  >
    <div
      class="bg-black/50 w-full h-full m-0 p-0 flex justify-center items-center"
    >
      <div class="flex flex-col justify-center items-center">
        <div
          class="text-7xl font-semibold leading-24 w-70/100 mx-auto text-white text-center capitalize mb-8"
        >
          Cities where we provide our services
        </div>
      </div>
    </div>
  </div>
  <div class="w-full h-[calc(100vh-15rem)] bg-gray-100">
    <div class="px-5 py-26 mx-auto">
      <div class="text-5xl font-semibold capitalize text-center">
        Local services in your Area
      </div>
      <div class="">
        <Carousel class="top-50" />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
