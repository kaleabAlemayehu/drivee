<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import { Icon } from "@iconify/vue";
const items = ref([
  { index: 0, name: "NewYork" },
  { index: 1, name: "London" },
  { index: 2, name: "Dubai" },
  { index: 3, name: "Tokyo" },
  { index: 4, name: "Paris" },
  { index: 5, name: "Berlin" },
  { index: 6, name: "Singapore" },
  { index: 7, name: "Beijing" },
]);
const windowSize: Number = 5;
const startIndex = ref(0);
const transilateX = ref(0);
const isSliding = ref(false);
const visibleItems = computed(() => {
  return Array.from(
    { length: windowSize },
    (_, i) => items.value[(startIndex.value + i) % items.value.length],
  );
});

const handleLeft = async () => {
  if (isSliding.value) return;
  isSlding.value = true;
  transilateX.value = 100;
  await new Promise((resovle) => setTimeout(resolve, 300));
  startIndex.value =
    (startIndex.value - 1 + items.value.length) % items.value.length;
  transilateX.value = 0;
  await nextTick();
  isSliding.value = false;
};

const handleRight = async () => {
  if (isSliding.value) return;
  isSliding.value = true;
  transilateX.value = -100;
  await new Promise((resolve) => setTimeout(resolve, 300));
  startIndex.value =
    (startIndex.value + 1 + items.value.length) % items.value.length;
  transilateX.value = 0;
  await nextTick();
  isSliding.value = false;
};
</script>
<template>
  <div class="h-screen bg-gray-100 w-full">
    <div class="capitalize text-center text-5xl font-semibold pt-50 mb-20">
      Local services we provide
    </div>
    <div
      class="flex justify-center items-center relative -top-25/100 w-5/6 mx-auto h-full"
    >
      <div
        class="group hover:shadow-lg transition-shadow duration-200 absolute inline-flex top-1/2 left-10 size-20 bg-white cursor-pointer rounded-full justify-center items-center focus:scale-110 transform -translate-y-1/2"
        @click="handleLeft()"
      >
        <Icon
          icon="lucide:chevron-left"
          class="block dark:text-white group-hover:text-black transition-colors duration-500 text-gray-500 text-4xl w-full"
        />
      </div>

      <div
        class="absolute flex justify-center gap-x-5 items-center w-5/6 top-1/2 transform -translate-y-1/2 transition-transform duration-300"
        :style="{ transform: `translateX(${transitionX}%)` }"
      >
        <div
          v-for="(el, i) in visibleItems"
          :key="el"
          class="rounded-full size-60 border-white border-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center text-2xl font-semibold text-black/70"
        >
          <img
            :src="`./city${el.index}.jpg`"
            alt=""
            class="inline-block mb-10 w-full h-full rounded-full object-cover object-center"
          />
          {{ el.name }}
        </div>
      </div>

      <div
        class="group hover:shadow-lg transition-shadow duration-200 absolute inline-flex top-1/2 right-10 size-20 bg-white cursor-pointer rounded-full justify-center items-center focus:scale-110 transform -translate-y-1/2"
        @click="handleRight()"
      >
        <Icon
          icon="lucide:chevron-right"
          class="block dark:text-white group-hover:text-black transition-colors duration-500 text-gray-500 text-4xl w-full"
        />
      </div>
    </div>
  </div>
</template>
<style scoped></style>
