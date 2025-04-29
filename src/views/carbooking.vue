<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';
import { useClient } from '../composables/useClient';
import ProductCarousel from '../components/ProductCarousel.vue';
import IsError from '../components/IsError.vue';
import Image1 from '../assets/carphoto1.png';
import Image2 from '../assets/carphoto2.png';
import Image3 from '../assets/carphoto3.png';
import Image4 from '../assets/carphoto4.png';
import Image5 from '../assets/carphoto5.png';
import Image6 from '../assets/carphoto6.png';
const images = [Image1, Image2, Image3, Image4, Image5, Image6];
const { get } = useClient();
const route = useRoute();
const isError = ref(false);
const isLoading = ref(true);
const car = ref(null);
const carPhotos = ref(null);
onBeforeMount(async () => {
  try {
    const id = route.params.id;
    let res = await get(`/cars/${id}`);
    console.log(res.data.message);
    if (res.data.status == 'success') {
      car.value = res.data.message;
      res = await get(`/carphotos/car/${id}`);
      if (res.data.status == 'success') {
        carPhotos.value = res.data.message;
        isLoading.value = false;
        console.log('carphoto', carPhotos.value);
      } else {
        isError.value = true;
        isLoading.value = false;
      }
    } else {
      isError.value = true;
      isLoading.value = false;
    }
  } catch (error) {
    isError.value = true;
    console.log(error.message);
  }
});
</script>
<template>
  <div class="w-full bg-white">
    <IsError
      v-if="isError"
      message="Unable to fetch information about the car."
    />
    <div class="w-4/5 mx-auto pt-32 px-10" v-else>
      <div class="h-auto mb-44 grid grid-cols-5 gap-x-8">
        <ProductCarousel class="col-span-3" :images="images" />
        <div
          class="col-span-2 bg-slate-100 rounded-lg px-10 py-8 h-min relative"
        >
          <div
            class="absolute size-14 border-[0.1px] border-gray-300 rounded-full bg-white flex justify-center items-center p-2 right-10 cursor-pointer"
          >
            <Icon
              icon="material-symbols:favorite-rounded"
              class="stroke-gray-400 stroke-2 text-2xl text-white"
            />
          </div>
          <div class="location w-full mt-16 mb-6">
            <label for="location" class="flex items-center mb-3">
              <Icon
                icon="majesticons:map-marker-area-line"
                class="text-2xl mr-2"
              />
              <div class="capitalize text-xl font-semibold">Location</div>
            </label>
            <input
              name="location"
              type="text"
              class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-full"
              placeholder="Location"
            />
          </div>

          <div class="pickup w-full mb-6">
            <label for="pickup_date" class="flex items-center mb-3">
              <Icon icon="uil:calender" class="text-2xl mr-2" />
              <div class="capitalize text-xl font-semibold">pick-up</div>
            </label>
            <div class="grid grid-cols-5 gap-x-3">
              <input
                name="pickup_date"
                type="datetime"
                class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-full col-span-3"
                placeholder="DD/MM/YY"
              />

              <input
                name="pickup_time"
                type="datetime"
                class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-full col-span-2"
                placeholder="12:30 PM"
              />
            </div>
          </div>
          <div class="dropoff w-full mb-6">
            <label for="dropoff_date" class="flex items-center mb-3">
              <Icon icon="uil:calender" class="text-2xl mr-2" />
              <div class="capitalize text-xl font-semibold">drop-off</div>
            </label>
            <div class="grid grid-cols-5 gap-x-3">
              <input
                name="dropoff_date"
                type="datetime"
                class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-full col-span-3"
                placeholder="DD/MM/YY"
              />

              <input
                name="dropoff_time"
                type="datetime"
                class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-full col-span-2"
                placeholder="12:30 PM"
              />
            </div>
          </div>
          <div class="duration w-full mb-10">
            <label for="duration" class="flex items-center mb-3">
              <Icon icon="mingcute:time-duration-line" class="text-2xl mr-2" />
              <div class="capitalize text-xl font-semibold">duration</div>
            </label>
            <div class="grid grid-cols-5 gap-x-3">
              <div
                class="px-6 py-4 outline-none text-gray-800 w-full col-span-3 capitalize"
              >
                7.75 hours
              </div>

              <div
                name="dropoff_time"
                type="datetime"
                class="px-6 py-4 outline-none ring-0 border-[0.1px] border-gray-200 rounded-lg bg-white text-black w-min col-span-2 shadow-xl font-bold mx-auto"
              >
                $35.63
              </div>
            </div>
          </div>
          <div
            class="rounded-lg bg-black py-4 w-98/100 mx-auto text-white text-2xl font-semibold text-center uppercase select-none mb-4 cursor-pointer"
          >
            book now
          </div>
        </div>
      </div>
      <div
        class="mb-44 bg-car-booking opacity-80 z-10 bg-no-repeat bg-bottom bg-contain"
      >
        <div class="bg-white/65 w-full h-full">
          <div class="mb-24">
            <div class="font-bold text-3xl uppercase mb-6">
              {{ car.make }} {{ car.model }} {{ car.year }}
            </div>
            <div
              class="w-1/2 capitalize text-left mb-5 text-gray-700 text-lg font-light"
            >
              <!-- TODO: add description for the car table and making it render on this -->
              the bmw m2 is the high-performance version of the 2 series 2-door
              coupe. the first generation of the m2 is the f8u coupe and is
              powered by turbocharged.
            </div>
          </div>
          <div class="">
            <div class="font-bold text-3xl capitalize mb-8">specifications</div>
            <ul class="w-1/3">
              <!-- TODO: owner only visible for logged in user maybe little profile of him -->
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">Owner</div>
                <div class="val">{{ car.owner_id }}</div>
              </li>
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">Price Per Hour</div>
                <div class="val">{{ car.price_per_hour }}</div>
              </li>
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">Make</div>
                <div class="val">{{ car.make }}</div>
              </li>
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">Model</div>
                <div class="val">{{ car.model }}</div>
              </li>
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">Year</div>
                <div class="val">{{ car.year }}</div>
              </li>
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">Fuel Type</div>
                <div class="val">{{ car.fuel_type }}</div>
              </li>
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">License Plate</div>
                <div class="val">{{ car.license_plate }}</div>
              </li>
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">Mileage</div>
                <div class="val">{{ car.mileage }}</div>
              </li>
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">Transmission</div>
                <div class="val">{{ car.transmission }}</div>
              </li>
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">Vin Number</div>
                <div class="val">{{ car.vin_number }}</div>
              </li>
              <!-- TODO: name instead of coordinates for location  -->
              <!-- <li class="flex justify-between mb-6 text-gray-600"> -->
              <!--   <div class="">Location</div> -->
              <!--   <div class="val">{{ car.location }}</div> -->
              <!-- </li> -->
              <li class="flex justify-between mb-6 text-gray-600">
                <div class="">Status</div>
                <div class="val">{{ car.status }}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
