<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
<template>
  <div
    class="bg-white h-[calc(100vh-10rem)] w-full mx-auto p-0 mb-8 relative top-0 right-0 left-0 grid grid-cols-2"
  >
    <div
      class="absolute right-2/5 top-50 z-10 bg-white flex flex-col items-start h-min justify-between mx-auto p-15 px-25 rounded-3xl border-[1px] border-gray-200 shadow-gray-300 shadow-2xl w-[calc(60%-12.5rem)]"
    >
      <div
        class="bg-gray-500 size-7 rounded-full absolute top-15 right-15"
      ></div>
      <div class="text-5xl w-4/5 my-8 font-semibold text-black capitalize">
        do you want to share your vehicle?
      </div>
      <div
        class="text-gray-800 font-light text-lg leading-10 h-max capitalize text-start"
      >
        We'll Use Your Car's Location To Calculate Your Onboard Bonus. Each ZIP
        Code Will Belogn to One Of Five Zones. Zones Are Based On Guest Demand
        For Cars. Zone 1 gets the highest bonus, while zones 4 and 5 aren't
        Eligible for the Onboard Bonus.
      </div>
      <div
        class="select-none inline-flex justify-between w-48 px-8 py-4 bg-black rounded-md my-16 cursor-pointer"
      >
        <div class="text-white">Learn More</div>
        <Icon
          icon="lucide:arrow-up-right"
          class="inline dark:text-white text-white text-2xl"
        />
      </div>
    </div>
    <div class=""></div>
    <div class="flex items-start justify-start">
      <img src="../assets/learnMore.jpg" class="object-contain h-full w-full" />
    </div>
  </div>
</template>
<style scoped></style>
