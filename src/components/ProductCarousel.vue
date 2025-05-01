<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Icon } from '@iconify/vue';
import type { CarPhotos } from '../types/index';

const props = defineProps<{ photos: CarPhotos[] }>();

// Current slide index
const currentIndex = ref(0);

// Function to go to the next slide
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % props.photos.length;
};

// Function to go to the previous slide
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + props.photos.length) % props.photos.length;
};

// Function to go to a specific slide
const goToSlide = (index: number) => {
  currentIndex.value = index;
};
console.log('props', props.photos);
</script>
<template>
  <div class="w-full h-full">
    <div class="relative w-full max-w-4xl overflow-hidden rounded-lg">
      <!-- Carousel Container -->
      <div class="relative h-[36rem]">
        <!-- Images -->
        <div
          v-for="(photo, index) in props.photos"
          :key="index"
          v-show="currentIndex === index"
          class="absolute inset-0 transition-opacity duration-500 ease-in-out bg-slate-100 mb-6"
          :class="{
            'opacity-100': currentIndex === index,
            'opacity-0': currentIndex !== index,
          }"
        >
          <img
            :src="photo.photo_url"
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
        v-for="(photo, index) in props.photos"
        :key="index"
        @click="goToSlide(index)"
        class="cursor-pointer border-2 z-10 border-transparent w-72 h-36 p-0 rounded-lg overflow-hidden bg-slate-100"
        :class="[index == currentIndex ? 'border-gray-200!' : '']"
      >
        <img
          :src="photo.photo_url"
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
