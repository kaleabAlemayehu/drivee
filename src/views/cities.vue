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
  <div class="w-full bg-white">
    <div class="px-5 py-16 mx-auto w-5/6">
      <div class="text-5xl font-semibold capitalize text-center">
        Your neighbors on Drivee
      </div>
      <div class="flex flex-wrap justify-between w-4/5 mx-auto mt-20 mb-10">
        <div
          v-for="i in 6"
          :key="i"
          class="bg-gray-100 rounded-lg w-32/100 h-[18rem] mb-6 py-6 px-8 flex flex-col shadow-lg"
        >
          <div class="flex justify-between items-center">
            <div class="text-2xl font-semibold capitalize">Andrew T</div>
            <img
              src="/andrew.jpeg"
              alt=""
              class="inline-block rounded-full size-25 object-cover object-center"
            />
          </div>
          <div class="flex py-5 items-center mb-4">
            <Icon
              v-for="i in 5"
              icon="ic:outline-star"
              class="text-yellow-600 text-2xl"
            />
          </div>
          <div class="text-gray-400 text-lg capitalize">
            i love this car! i wish i could rent it monthly
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
