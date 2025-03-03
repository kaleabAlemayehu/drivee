<script setup lang="ts">
import { Icon } from "@iconify/vue";
import ProductCarousel from "../components/ProductCarousel.vue";
import Image1 from "../assets/bikephoto1.png";
import Image2 from "../assets/bikephoto2.png";
import Image3 from "../assets/bikephoto3.png";
import Image4 from "../assets/bikephoto4.png";
import Image5 from "../assets/bikephoto5.png";
import Image6 from "../assets/bikephoto6.png";

const images = [Image1, Image2, Image3, Image4, Image5, Image6];
</script>
<template>
  <div class="w-full bg-white">
    <div class="w-4/5 mx-auto pt-32 px-10">
      <div class="h-auto mb-44 grid grid-cols-5 gap-x-8">
        <ProductCarousel class="col-span-3" :images="images" />
        <div
          class="col-span-2 bg-slate-100 rounded-lg px-10 py-8 h-min relative"
        >
          <div
            class="absolute size-14 border-[0.1px] border-gray-300 rounded-full bg-white flex justify-center items-center p-2 right-10 cursor-pointer"
          >
            <Icon
              icon="material-symbols:favorite-rounded"
              class="stroke-gray-400 stroke-2 text-2xl text-white"
            />
          </div>
          <div class="location w-full mt-16 mb-6">
            <label for="location" class="flex items-center mb-3">
              <Icon
                icon="majesticons:map-marker-area-line"
                class="text-2xl mr-2"
              />
              <div class="capitalize text-xl font-semibold">Location</div>
            </label>
            <input
              name="location"
              type="text"
              class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-full"
              placeholder="Location"
            />
          </div>

          <div class="pickup w-full mb-6">
            <label for="pickup_date" class="flex items-center mb-3">
              <Icon icon="uil:calender" class="text-2xl mr-2" />
              <div class="capitalize text-xl font-semibold">pick-up</div>
            </label>
            <div class="grid grid-cols-5 gap-x-3">
              <input
                name="pickup_date"
                type="datetime"
                class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-full col-span-3"
                placeholder="DD/MM/YY"
              />

              <input
                name="pickup_time"
                type="datetime"
                class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-full col-span-2"
                placeholder="12:30 PM"
              />
            </div>
          </div>
          <div class="dropoff w-full mb-6">
            <label for="dropoff_date" class="flex items-center mb-3">
              <Icon icon="uil:calender" class="text-2xl mr-2" />
              <div class="capitalize text-xl font-semibold">drop-off</div>
            </label>
            <div class="grid grid-cols-5 gap-x-3">
              <input
                name="dropoff_date"
                type="datetime"
                class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-full col-span-3"
                placeholder="DD/MM/YY"
              />

              <input
                name="dropoff_time"
                type="datetime"
                class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-full col-span-2"
                placeholder="12:30 PM"
              />
            </div>
          </div>
          <div class="duration w-full mb-10">
            <label for="duration" class="flex items-center mb-3">
              <Icon icon="mingcute:time-duration-line" class="text-2xl mr-2" />
              <div class="capitalize text-xl font-semibold">duration</div>
            </label>
            <div class="grid grid-cols-5 gap-x-3">
              <div
                class="px-6 py-4 outline-none text-gray-800 w-full col-span-3 capitalize"
              >
                7.75 hours
              </div>

              <div
                name="dropoff_time"
                type="datetime"
                class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-min col-span-2 shadow-xl font-bold mx-auto"
              >
                $35.63
              </div>
            </div>
          </div>
          <div
            class="rounded-lg bg-black py-4 w-98/100 mx-auto text-white text-2xl font-semibold text-center uppercase select-none mb-4 cursor-pointer"
          >
            book now
          </div>
        </div>
      </div>
      <div class="mb-44 bg-bike-booking z-10 bg-no-repeat bg-center bg-contain">
        <div class="bg-white/90 w-full h-full">
          <div class="mb-24">
            <div class="font-bold text-3xl uppercase mb-6">bmw m2 2020</div>
            <div
              class="w-1/2 capitalize text-left mb-5 text-gray-700 text-lg font-light"
            >
              the bmw m2 is the high-performance version of the 2 series 2-door
              coupe. the first generation of the m2 is the f8u coupe and is
              powered by turbocharged.
            </div>
          </div>
          <div class="">
            <div class="font-bold text-3xl capitalize mb-8">specifications</div>
            <ul class="w-1/3">
              <li
                v-for="i in 10"
                :key="i"
                class="flex justify-between mb-6 text-gray-600"
              >
                <div class="">Body</div>
                <div class="val">sedan</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
