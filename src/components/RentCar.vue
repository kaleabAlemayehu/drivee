<script setup lang="ts">
const badges: Array<string> = ["luxury", "comfort", "prestige"];
</script>
<template>
  <div
    class="bg-white h-[calc(100vh-10rem)] w-full mx-auto mt-36 p-0 grid grid-cols-8 gap-x-6"
  >
    <div class="col-span-4 flex flex-col justify-center mx-auto pl-50">
      <div class="text-6xl font-semibold text-black">Rent A Car</div>
      <div class="flex items-center w-1/4 my-8 gap-x-5">
        <div
          class="bg-gray-100 px-3 py-2 text-gray-500 font-light uppercase rounded-md"
          v-for="badge in badges"
          :key="badge"
        >
          {{ badge }}
        </div>
      </div>
      <div
        class="text-gray-800 font-extralight text-xl leading-10 h-max text-start"
      >
        Booking a self-driving car with us is simple and easy You can browse our
        selection of vehicles online. choose the car that best fits your needs,
        and book it for the duration of your choice. Our user-friendly platform
        allows you to manage your booking and view your trip history with ease.
      </div>
      <div
        class="select-none text-white inline w-36 px-8 py-4 bg-black rounded-md my-8 cursor-pointer"
      >
        Rent Car
      </div>
    </div>
    <div class="col-span-4 flex items-start justify-start">
      <img src="../assets/rentCar.jpg" class="object-contain h-full w-full" />
    </div>
  </div>
</template>
<style scoped></style>
