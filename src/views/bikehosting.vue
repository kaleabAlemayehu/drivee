<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
<template>
  <div
    class="h-[calc(100vh-10rem)] w-full bg-[url(/bikehosting.jpg)] bg-top bg-cover object-scale-down bg-no-repeat flex justify-center items-center"
  >
    <div
      class="bg-black/50 w-full h-full m-0 p-0 flex justify-center items-center"
    >
      <div class="flex flex-col justify-center items-center">
        <div
          class="text-6xl font-semibold text-white text-center capitalize mb-9"
        >
          Turn your bike into extra money
        </div>
        <div class="text-white text-lg w-7/10 text-center mb-9">
          When you list your bike, you're earning money while helping others
          navigate your city. it's a win-win, and your next big opportunity.
        </div>
        <div
          class="bg-white px-6 py-3 font-bold text-black capitalize rounded-lg select-none inline cursor-pointer"
        >
          Share Your bike
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-white h-[calc(100vh-10rem)] w-full mx-auto p-0 mb-32 relative top-0 right-0 left-0 grid grid-cols-2"
  >
    <div
      class="absolute right-2/5 top-50 z-10 bg-white flex flex-col items-start h-max justify-between mx-auto p-15 px-25 rounded-3xl border-[1px] border-gray-200 shadow-gray-300 shadow-2xl w-[calc(60%-12.5rem)]"
    >
      <div
        class="bg-gray-400 size-7 rounded-full absolute bottom-10 right-1/2 transform translate-x-1/2"
      ></div>
      <div class="text-5xl w-4/5 my-8 font-semibold text-black capitalize">
        Earn up to $1000 for adding a new bike
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
      <img src="../assets/rentBike.jpg" class="object-contain h-full w-full" />
    </div>
  </div>
  <div
</template>
<style scoped></style>
