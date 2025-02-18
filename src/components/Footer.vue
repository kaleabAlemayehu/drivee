<script setup lang="ts">
import { Icon } from "@iconify/vue";
const socials: Array<string> = [
  "ion:social-facebook",
  "ri:twitter-x-fill",
  "lucide:instagram",
  "bx:bxl-linkedin",
];
const about: Array<string> = [
  "about us",
  "careers",
  "help",
  "contact us",
  "fee policy",
  "privacy policy",
  "term and conditions",
];
const city: Array<string> = [
  "paris",
  "london",
  "dubai",
  "tokyo",
  "newyork",
  "berlin",
  "singapore",
  "beijing",
];

const vehicle: Array<string> = ["car", "bike"];
</script>
<template>
  <div class="w-full bg-black h-[calc(100vh/2)] text-white">
    <div class="w-5/6 mx-auto grid grid-cols-3 gap-x-30 h-full py-25">
      <div class="select-none px-3 flex flex-col h-8/10 justify-start">
        <div class="text-4xl font-semibold mb-4">Drivee</div>
        <div class="capitalize text-gray-500 text-xl mb-4">
          Is just a drivee ride away. take control of your journey today
        </div>
        <div class="flex justify-start items-center my-4">
          <div v-for="s in socials" class="cursor-pointer my-4 mr-8" :key="s">
            <Icon :icon="s" class="text-3xl text-white" />
          </div>
        </div>
      </div>
      <div class="col-span-2 grid grid-cols-3">
        <div class="select-none">
          <div class="text-2xl mb-8">About Company</div>
          <ul class="list-disc text-lg capitalize px-6">
            <li v-for="a in about" class="pb-1">{{ a }}</li>
          </ul>
        </div>
        <div class="select-none">
          <div class="text-2xl mb-8">City</div>
          <ul class="list-disc text-lg capitalize px-6">
            <li class="pb-1" v-for="c in city">{{ c }}</li>
          </ul>
        </div>
        <div class="select-none">
          <div class="text-2xl mb-8">Vehicle types</div>
          <ul class="list-disc text-lg capitalize px-6">
            <li class="pb-1" v-for="v in vehicle">{{ v }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
