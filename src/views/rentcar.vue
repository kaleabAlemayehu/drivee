<script setup lang="ts">
import CarCard from "../components/CarCard.vue";

import Image1 from "../assets/carphoto1.png";
import Image2 from "../assets/carphoto2.png";
import Image3 from "../assets/carphoto3.png";
import Image4 from "../assets/carphoto4.png";
import Image5 from "../assets/carphoto5.png";
import Image6 from "../assets/carphoto6.png";
import Image7 from "../assets/carphoto7.png";
import Image8 from "../assets/carphoto8.png";
import Image9 from "../assets/carphoto9.png";
import Image10 from "../assets/carphoto10.png";
import Image11 from "../assets/carphoto11.png";
import Image12 from "../assets/carphoto12.png";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
];
</script>
<template>
  <div
    class="h-[calc(100vh-20rem)] w-full bg-black relative overflow-hidden text-white flex justify-center items-center -z-10"
  >
    <div class="flex mx-auto min-w-5/6 px-10 justify-center">
      <div class="text-5xl leading-22 text-center font-semibold capitalize">
        Rent a car, rent your freedom
      </div>

      <img
        src="./../assets/map.svg"
        alt=""
        class="absolute top-50 -left-40 z-10 m-0"
      />

      <img
        src="./../assets/rentcar.png"
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
  <div class="w-full bg-gray-100 pt-56 pb-18">
    <div class="grid grid-cols-4 grid-row-3 gap-6 w-6/7 mx-auto">
      <CarCard v-for="i in images" :i="i" />
    </div>
  </div>
</template>
<style scoped></style>
