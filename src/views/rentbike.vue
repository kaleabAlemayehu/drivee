<script setup lang="ts">
import CarCard from "../components/CarCard.vue";
</script>
<template>
  <div
    class="h-[calc(100vh-20rem)] w-full bg-black relative overflow-hidden text-white flex justify-center items-center -z-10"
  >
    <div class="flex mx-auto min-w-5/6 px-10 justify-center">
      <div class="text-5xl leading-22 text-center font-semibold capitalize">
        Rent a bike, rent your freedom
      </div>

      <img
        src="./../assets/map.svg"
        alt=""
        class="absolute top-50 -left-40 z-10 m-0"
      />

      <img
        src="./../assets/rentbike.png"
        alt=""
        class="w-150 absolute top-15 right-0 z-200 m-0"
      />
    </div>
  </div>
  <div class="bg-white relative m-0 p-0">
    <div
      class="absolute bg-white h-48 rounded-lg shadow-gray-200 shadow-lg w-5/6 -bottom-25 z-50! left-0 right-0 mx-auto"
    ></div>
  </div>
  <div class="w-full bg-gray-100 pt-56 pb-18">
    <div class="grid grid-cols-4 grid-row-3 gap-6 w-6/7 mx-auto">
      <div
        class="w-[24rem] py-2 px-6 h-[34rem] bg-white rounded-xl grid grid-rows-2 border-gray-300 border-[1.2px]"
        v-for="i in 12"
      >
        <div class="rounded-xl rounded-b-none">
          <img
            :src="`/bikephoto${i}.png`"
            alt=""
            class="w-full h-full inline-block object-contain origin-center"
          />
        </div>
        <div class="rounded-xl rounded-t-none">
          <div class="text-2xl font-semibold mb-2 capitalize">Honda 140</div>
          <div class="grid grid-cols-2 gap-y-2 mb-2">
            <div class="text-xl font-normal text-gray-700">Seat: 2</div>
            <div class="text-xl font-normal text-gray-700 text-end">
              Horsepower: 500
            </div>
            <div class="text-base text-gray-600">Fuel: Petrol</div>
            <div class="text-base text-gray-600 text-end">Engine: 3000</div>
            <div class="text-base text-gray-600">Front Break: Disc</div>
            <div class="text-base text-gray-600 text-end">Stroke: 58.7 Mm</div>
            <div class="text-base text-gray-600">Gear Box: 6-Speed</div>
            <div class="text-base text-gray-600 text-end">Mileage: 40 Kmpl</div>
          </div>
          <div class="text-xl font-normal text-gray-500">Per Hours</div>

          <div class="grid grid-cols-2 py-2">
            <div class="text-3xl text-black font-bold">$56</div>
            <div class="flex items-center p-0 m-0 justify-end">
              <div
                class="text-lg font-bold text-white py-3 px-6 bg-black rounded-lg cursor-pointer select-none"
              >
                Rent Bike
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
