<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { Icon } from '@iconify/vue';
import type { CarPhotos, CarResponse } from '../types/car';
import type { User } from '../types/users';
import { useClient } from '../composables/useClient';
import { useUserStore } from '../store/useUserStore';
import ProductCarousel from '../components/ProductCarousel.vue';
import SkeletonCarousel from '../components/SkeletonCarousel.vue';
import IsError from '../components/IsError.vue';
const { get } = useClient();
const route = useRoute();
const isError = ref(false);
const isLoading = ref(true);
const car = ref<CarResponse>();
const owner = ref<User>();
const showInfo = ref(false);
const carPhotos = ref<CarPhotos[]>();
const { user } = useUserStore();
onBeforeMount(async () => {
  if (user) {
    showInfo.value = true;
  } else {
    showInfo.value = false;
  }
  const id = route.params.id;
  try {
    const res = await get(`/cars/${id}`);
    console.log(res.data.message);
    if (res.data.status == 'success') {
      car.value = res.data.message;
    } else {
      isError.value = true;
      isLoading.value = false;
    }
  } catch (error: any) {
    isError.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 1500);
    console.log(error.message);
  }
  try {
    const res = await get(`/carphotos/car/${id}`);
    if (res.data.status == 'success') {
      carPhotos.value = res.data.message;
      isLoading.value = false;
      console.log('carphoto', res.data.message);
    } else {
      isError.value = true;
      isLoading.value = false;
    }
  } catch (error: any) {
    isError.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 1500);
    console.log(error.message);
  }

  try {
    const res = await get(`/users/${car.value.owner_id}`, {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.data.status == 'success') {
      owner.value = res.data.message;
    } else {
    }
  } catch (error: any) {
    //isError.value = true;
    setTimeout(() => {
      isLoading.value = false;
    }, 1500);
    console.log(error.message);
  }
});
</script>
<template>
  <div class="w-full bg-white">
    <div class="w-4/5 mx-auto pt-32 px-10">
      <SkeletonCarousel v-if="isLoading" />
      <IsError
        v-else-if="isError"
        message="Unable to fetch information about the car."
      />
      <div class="" v-else>
        <div class="h-auto mb-44 grid grid-cols-5 gap-x-8">
          <ProductCarousel
            class="col-span-3"
            :photos="carPhotos as CarPhotos[]"
          />
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
                <Icon
                  icon="mingcute:time-duration-line"
                  class="text-2xl mr-2"
                />
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
                {{ car?.make }} {{ car?.model }} {{ car?.year }}
              </div>
              <div
                class="w-1/2 capitalize text-left mb-5 text-gray-700 text-lg font-light"
              >
                {{ car?.description }}
              </div>
            </div>
            <div class="">
              <div class="font-bold text-3xl capitalize mb-8">
                specifications
              </div>
              <ul class="w-1/3">
                <li
                  class="relative flex items-center justify-between mb-6 text-gray-600"
                >
                  <div class="">Owner</div>
                  <div
                    class="flex items-center justify-between"
                    v-if="showInfo"
                  >
                    <span class="mr-2"
                      >{{ owner?.first_name }}{{ owner?.last_name }}</span
                    >
                    <img
                      class="size-7 rounded-full"
                      :src="owner?.profile_picture"
                      alt="`${owner?.first_name}'s picture`"
                    />
                  </div>

                  <span
                    ref="ownerRef"
                    class="-top-2 -right-5 px-3 py-2 rounded-xl z-9999 bg-gray-200"
                    v-else
                    >Login to see Owner profile</span
                  >
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
                <li
                  class="flex justify-between items-center mb-6 text-gray-600"
                >
                  <div class="">License Plate</div>
                  <div class="" v-if="showInfo">{{ car.license_plate }}</div>
                  <span
                    class="-top-2 -right-5 px-3 py-2 rounded-xl z-9999 bg-gray-200"
                    v-else
                    >Login to see license plate</span
                  >
                </li>
                <li class="flex justify-between mb-6 text-gray-600">
                  <div class="">Mileage</div>
                  <div class="val">{{ car.mileage }}</div>
                </li>
                <li class="flex justify-between mb-6 text-gray-600">
                  <div class="">Transmission</div>
                  <div class="val">{{ car.transmission }}</div>
                </li>
                <li
                  class="flex justify-between items-center mb-6 text-gray-600"
                >
                  <div class="">Vin Number</div>
                  <div class="" v-if="showInfo">{{ car.vin_number }}</div>
                  <span
                    class="-top-2 -right-5 px-3 py-2 rounded-xl z-9999 bg-gray-200"
                    v-else
                    >Login to see vin number</span
                  >
                </li>
                <!-- TODO: name instead of coordinates for location  -->
                <!-- <li class="flex justify-between mb-6 text-gray-600"> -->
                <!--   <div class="">Location</div> -->
                <!-- <div class="" v-if="showInfo"> -->
                <!--   <div :class="['val', showInfo ? 'blur-md select-none' : '']">{{ car.location }}</div> -->
                <!-- </div> -->
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
  </div>
</template>
<style scoped></style>
