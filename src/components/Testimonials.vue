<script setup lang="ts">
import type { Testimonials } from "../types/index.ts";
import image1 from "../assets/comment1.jpg";
import image2 from "../assets/comment2.jpg";
import image3 from "../assets/comment3.jpg";
const cards: Array<Testimonials> = [
  {
    name: "Rebecca Parker",
    title: "excellent service! car rent serive",
    comment:
      "we have been using drivee for our trips needs for several years now and have always been happy with their service. Their customr support is excellent and they are always available to help with any issues we have. their prices are also very competitive.",
    image: image1,
  },

  {
    name: "Jovan Reels",
    title: "excellent service! car rent serive",
    comment:
      "I have been using drivee for my car rental needs for over 5 years now. I have never had any problems with their service. Their customers support is always responsive and helpful. i would recommand drivee to anyone looking for a reliable car rental provider.",
    image: image2,
  },
  {
    name: "Kanesha Keyton",
    title: "excellent service! car rent serive",
    comment:
      "Endorsed by industry experts. Drivee is The car rental solution you can trust. with years of experience in the field. we provide fast, reliable and secure car rental services.",

    image: image3,
  },
];
</script>
<template>
  <div class="w-full h-max px-10 bg-gray-50 flex flex-col justify-center">
    <div class="capitalize text-center text-5xl font-semibold mt-25 mb-20">
      What Our customers saying...
    </div>
    <div
      class="flex rounded-lg w-5/6 mb-35 justify-around mx-auto h-9/10 items-center"
    >
      <div
        v-for="(c, _) in cards"
        :key="c.name"
        class="w-3/10 bg-white shadow-2xl shadow-gray-200 flex relative"
      >
        <img
          :src="c.image"
          alt="customers photo"
          class="object-cover w-full h-max rounded-xl"
        />
        <div
          class="absolute rounded-b-lg bg-black/45 h-42/100 px-8 text-white bottom-0 left-0 right-0 grid grid-rows-5"
        >
          <div class="text-lg font-medium capitalize mt-4 mb-2">
            {{ c.title }}
          </div>
          <div class="text-base font-light row-span-3 my-2">
            {{ c.comment }}
          </div>
          <div class="text-lg font-semibold -mt-2">
            &horbar;&horbar; {{ c.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
