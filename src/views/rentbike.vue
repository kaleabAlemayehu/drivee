<script setup lang="ts">
import BikeCard from "../components/BikeCard.vue";
import Image1 from "../assets/bikephoto1.png";
import Image2 from "../assets/bikephoto2.png";
import Image3 from "../assets/bikephoto3.png";
import Image4 from "../assets/bikephoto4.png";
import Image5 from "../assets/bikephoto5.png";
import Image6 from "../assets/bikephoto6.png";
import Image7 from "../assets/bikephoto7.png";
import Image8 from "../assets/bikephoto8.png";
import Image9 from "../assets/bikephoto9.png";
import Image10 from "../assets/bikephoto10.png";
import Image11 from "../assets/bikephoto11.png";
import Image12 from "../assets/bikephoto12.png";

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
        Rent a bike, rent your freedom
      </div>

      <img
        src="./../assets/map.svg"
        alt=""
        class="absolute top-50 -left-40 z-10 m-0"
      />

      <img
        src="./../assets/rentbike.png"
        alt=""
        class="w-150 absolute top-15 right-0 z-200 m-0"
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
      <BikeCard v-for="i in images" :i="i" />
    </div>
  </div>
</template>
<style scoped></style>
