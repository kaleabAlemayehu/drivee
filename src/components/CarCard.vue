<script setup lang="ts">
import { RouterLink } from 'vue-router';
import type { CarCardProps } from '../types/car';
const props = defineProps<CarCardProps>();
</script>
<template>
  <div
    class="w-[24rem] py-2 px-6 h-[34rem] bg-white rounded-xl grid grid-rows-2 border-gray-300 border-[1.2px] relative isolate"
  >
    <div class="absolute top-5 left-5">
      <span class="relative flex size-3">
        <span
          :class="[
            'absolute inline-flex h-full w-full animate-ping rounded-full  opacity-75',
            props.status === 'avaliable'
              ? 'bg-green-500'
              : props.status === 'rented'
                ? 'bg-yellow-500'
                : props.status === 'inactive'
                  ? 'bg-red-500'
                  : '',
          ]"
        ></span>
        <span
          :class="[
            'relative inline-flex size-3 rounded-full ',
            props.status === 'avaliable'
              ? 'bg-green-500'
              : props.status === 'rented'
                ? 'bg-yellow-500'
                : props.status === 'inactive'
                  ? 'bg-red-500'
                  : '',
          ]"
        ></span>
      </span>
    </div>
    <div class="rounded-xl rounded-b-none">
      <img
        :src="props.thumbnail_picture"
        alt=""
        class="w-full h-full inline-block object-contain origin-center"
      />
    </div>
    <div class="rounded-xl rounded-t-none">
      <div class="text-2xl font-semibold mb-2">
        {{ props.make }} {{ props.model }}
      </div>
      <!-- <div class="text-2xl font-semibold mb-4">Jeep Renegade</div> -->
      <div class="grid grid-cols-2 gap-y-2 my-6 text-left">
        <div
          class="text-lg font-normal text-gray-700 flex justify-between pr-4"
        >
          <span class="capitalize">Year:</span>
          <span class="capitalize">{{ props.year }}</span>
        </div>
        <div
          class="text-lg font-normal text-gray-700 flex justify-between pl-4"
        >
          <span class="capitalize">Gearbox:</span>
          <span class="capitalize">{{ props.transmission }}</span>
        </div>
        <div class="text-lg text-gray-700 flex justify-between pr-4">
          <span class="capitalize">Fuel:</span>
          <span class="capitalize">{{ props.fuel_type }}</span>
        </div>
        <div class="text-lg text-gray-700 flex justify-between pl-4">
          <span class="capitalize">Mileage:</span>
          <span class="capitalize">{{ props.mileage }}</span>
        </div>
      </div>
      <div class="flex flex-col justify-end">
        <div class="text-xl font-semibold text-gray-800 pb-0">Per Hours</div>

        <div class="flex justify-between items-center py-2">
          <div class="text-3xl text-black font-bold">
            ${{ props.price_per_hour }}
          </div>
          <div class="flex items-center p-0 m-0 justify-end">
            <router-link
              :to="`/car-booking/${props.id}`"
              class="text-lg font-bold text-white py-3 px-6 bg-black rounded-lg cursor-pointer select-none"
            >
              Rent Car
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
