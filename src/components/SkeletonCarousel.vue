<script setup lang="ts"></script>
<template>
  <div
    class="bg-gray-100 text-7xl h-[48rem] z-20 w-full animate-pulse grid grid-rows-4 grid-cols-5 rounded-lg gap-x-12"
  >
    <div
      class="bg-gray-300 w-full h-full relative rounded-lg col-span-3 row-span-3"
    >
      <div
        class="left-5 bg-gray-200 absolute size-12 animate-pulse rounded-full top-1/2 -translate-y-1/2"
      ></div>
      <div
        class="right-5 bg-gray-200 absolute size-12 animate-pulse rounded-full top-1/2 -translate-y-1/2"
      ></div>
    </div>
    <div
      class="w-full h-9/10 rounded-lg bg-gray-300 py-8 row-span-4 col-span-2"
    >
      <div
        class="bg-gray-200 w-87/100 h-18 animate-pulse rounded-md my-8 mx-8"
      ></div>

      <div class="flex justify-between">
        <div
          class="bg-gray-200 w-52/100 h-18 animate-pulse rounded-md mb-12 mx-8"
        ></div>
        <div
          class="bg-gray-200 w-32/100 h-18 animate-pulse rounded-md mb-12 mx-8"
        ></div>
      </div>

      <div class="flex justify-between">
        <div
          class="bg-gray-200 w-32/100 h-18 animate-pulse rounded-md mb-12 mx-8"
        ></div>
        <div
          class="bg-gray-200 w-52/100 h-18 animate-pulse rounded-md mb-12 mx-8"
        ></div>
      </div>

      <div class="flex justify-between">
        <div
          class="bg-gray-200 w-32/100 h-18 animate-pulse rounded-md mb-12 mx-8"
        ></div>
        <div
          class="bg-gray-200 w-18/100 h-18 animate-pulse rounded-md mb-12 mx-8"
        ></div>
      </div>
      <div
        class="bg-gray-200 w-87/100 h-18 animate-pulse rounded-md my-8 mx-8 bottom-0"
      ></div>
    </div>
    <div class="flex justify-start col-span-3 row-span-1 bg-gray-100 py-4">
      <div
        v-for="i in 5"
        :key="i"
        class="w-65 h-full bg-gray-300 rounded-md mr-5"
      ></div>
    </div>
  </div>
</template>
<style></style>
