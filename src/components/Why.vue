<script setup lang="ts">
import type { Stats } from "../types/index.ts";
const stats: Array<Stats> = [
  { num: "45k+", des: "success tour" },
  { num: "1M+", des: "Happy Customers" },
  { num: "3+", des: "Year Experience" },
];
</script>
<template>
  <div
    class="mx-auto mt-40 mb-20 w-5/6 px-10 grid grid-cols-2 gap-x-28 h-84 text-black"
  >
    <div class="w-full flex flex-col justify-evenly h-full">
      <div class="text-5xl font-semibold capitalize">Why Choose Us</div>
      <div
        class="text-gray-800 font-light text-lg leading-10 h-max capitalize text-start"
      >
        Booking a self-driving car with us is simple and easy. You can browse
        our selection of vehicles online, choose the car that best fits your
        needs, and book it for the duration of your choice
      </div>
    </div>
    <div class="flex justify-center items-center w-full h-full">
      <div
        class="mx-auto rounded-xl shadow-xl shadow-gray-300 flex h-38 w-95/100"
      >
        <div class="flex justify-between items-center w-9/10 mx-auto">
          <div v-for="s in stats" :key="s.des" class="flex-auto">
            <div class="text-4xl text-center font-bold">{{ s.num }}</div>
            <div
              class="text-base text-gray-500 text-center font-normal capitalize"
            >
              {{ s.des }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
