<script setup lang="ts">
const props = defineProps(["i"]);
</script>

<template>
  <div
    class="w-[24rem] py-2 px-6 h-[34rem] bg-white rounded-xl grid grid-rows-2 border-gray-300 border-[1.2px]"
  >
    <div class="rounded-xl rounded-b-none">
      <img
        :src="`/bikephoto${props.i}.png`"
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
</template>
<style scoped></style>
