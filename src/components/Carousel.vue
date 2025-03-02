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
const show = ref(true);
function toggle() {
  show.value = !show.value;
}
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
      <div
        v-for="(el, i) in visibleItems"
        :key="el"
        class="rounded-full size-60 border-white border-8 shadow-xl hover:shadow-2xl transition-all duration-300 text-center text-2xl font-semibold text-black/70 select-none"
      >
        <img
          :src="`/city${el.index}.jpg`"
          alt=""
          class="inline-block mb-10 w-full h-full rounded-full object-cover object-center"
        />
        {{ el.name }}
      </div>
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
