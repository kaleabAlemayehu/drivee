<script setup lang="ts">
import { ref, defineProps } from "vue";
import { Icon } from "@iconify/vue";

const props = defineProps(["images"]);
// Define the images array

// Current slide index
const currentIndex = ref(0);

// Function to go to the next slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
};

// Function to go to the previous slide
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
};

// Function to go to a specific slide
const goToSlide = (index) => {
  currentIndex.value = index;
};
</script>
<template>
  <div class="w-full h-full">
    <div class="relative w-full max-w-4xl overflow-hidden rounded-lg">
      <!-- Carousel Container -->
      <div class="relative h-[36rem]">
        <!-- Images -->
        <div
          v-for="(image, index) in props.images"
          :key="index"
          v-show="currentIndex === index"
          class="absolute inset-0 transition-opacity duration-500 ease-in-out bg-slate-100 mb-20"
          :class="{
            'opacity-100': currentIndex === index,
            'opacity-0': currentIndex !== index,
          }"
        >
          <img
            :src="image"
            :alt="`Slide ${index + 1}`"
            class="object-contain w-full h-full"
          />
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div
        @click="prevSlide"
        class="absolute left-10 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none cursor-pointer select-none bg-white shadow-xl"
      >
        <Icon
          icon="material-symbols:arrow-left-alt-rounded"
          class="text-black text-3xl"
        />
      </div>
      <div
        @click="nextSlide"
        class="absolute right-10 top-1/2 transform -translate-y-1/2 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 focus:outline-none cursor-pointer select-none bg-white shadow-xl"
      >
        <Icon
          icon="material-symbols:arrow-right-alt-rounded"
          class="text-black text-3xl"
        />
      </div>
    </div>

    <!-- Indicators -->
    <div class="flex gap-x-4">
      <div
        v-for="(image, index) in props.images"
        :key="index"
        @click="goToSlide(index)"
        class="cursor-pointer border-2 z-10 border-transparent w-72 h-40 p-0 rounded-lg overflow-hidden bg-slate-100"
        :class="[index == currentIndex ? 'border-gray-200!' : '']"
      >
        <img
          :src="image"
          :alt="`Slide ${index + 1}`"
          class="mx-auto inline-block object-contain h-full"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
</style>
