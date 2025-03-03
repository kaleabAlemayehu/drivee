<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
import Image1 from "../assets/city1.jpg";
import Image2 from "../assets/city2.jpg";
import Image3 from "../assets/city3.jpg";
import Image4 from "../assets/city4.jpg";
import Image5 from "../assets/city5.jpg";
import Image6 from "../assets/city6.jpg";
import Image7 from "../assets/city7.jpg";
import Image0 from "../assets/city0.jpg";
const items = ref([
  { index: 0, name: "NewYork", image: Image0 },
  { index: 1, name: "London", image: Image1 },
  { index: 2, name: "Dubai", image: Image2 },
  { index: 3, name: "Tokyo", image: Image3 },
  { index: 4, name: "Paris", image: Image4 },
  { index: 5, name: "Berlin", image: Image5 },
  { index: 6, name: "Singapore", image: Image6 },
  { index: 7, name: "Beijing", image: Image7 },
]);
const windowSize: number = 5;
const startIndex = ref(0);
const isSliding = ref(false);
const visibleItems = computed(() => {
  return Array.from(
    { length: windowSize },
    (_, i) => items.value[(startIndex.value + i) % items.value.length],
  );
});

const handleLeft = async () => {
  if (isSliding.value) return;
  isSliding.value = true;
  await new Promise((resolve) => setTimeout(resolve, 300));
  startIndex.value =
    (startIndex.value - 1 + items.value.length) % items.value.length;
  await nextTick();
  isSliding.value = false;
};

const handleRight = async () => {
  if (isSliding.value) return;
  isSliding.value = true;
  await new Promise((resolve) => setTimeout(resolve, 300));

  startIndex.value =
    (startIndex.value + 1 + items.value.length) % items.value.length;
  await nextTick();
  isSliding.value = false;
};
</script>
<template>
  <div
    class="flex justify-center items-center relative -top-25/100 w-5/6 mx-auto h-full"
  >
    <div
      class="z-10 justify-end pr-4 items-center w-64 h-100 select-none absolute inline-flex top-1/2 transform -translate-y-1/2 -left-30"
    >
      <div
        class="hover:shadow-lg transition-shadow bg-white size-20 duration-200 cursor-pointer rounded-full justify-center items-center focus:scale-110 flex"
        @click="handleLeft()"
      >
        <Icon
          icon="lucide:chevron-left"
          class="block group-hover:text-black transition-colors duration-500 text-gray-500 text-4xl w-full"
        />
      </div>
    </div>

    <div
      class="absolute cursor-pointer flex justify-center gap-x-5 items-center w-5/6 top-1/2 transform -translate-y-1/2 transition-transform duration-300"
    >
      <router-link
        to="/cities/"
        v-for="(el, _) in visibleItems"
        :key="el.index"
        class="rounded-full size-60 border-white border-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center text-2xl font-semibold text-black/70 select-none"
      >
        <img
          :src="el.image"
          alt=""
          class="inline-block mb-10 w-full h-full rounded-full object-cover object-center"
        />
        {{ el.name }}
      </router-link>
    </div>

    <div
      class="z-10 justify-start pl-4 items-center w-64 h-100 select-none absolute inline-flex top-1/2 transform -translate-y-1/2 -right-30"
    >
      <div
        class="hover:shadow-lg transition-shadow bg-white size-20 duration-200 cursor-pointer rounded-full justify-center items-center focus:scale-110 flex"
        @click="handleRight()"
      >
        <Icon
          icon="lucide:chevron-right"
          class="block group-hover:text-black transition-colors duration-500 text-gray-500 text-4xl w-full"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
