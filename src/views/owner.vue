<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import type { LatLngLiteral, Marker } from 'leaflet';
import type { MarkerData } from '../types/map';
import type { CarResponse } from '../types/index';
import { ref, onBeforeMount, watch, onMounted } from 'vue';
import { format } from 'date-fns';
import { useUserStore } from '../store/useUserStore';
import { useClient } from '../composables/useClient';
import { useLeaflet } from '../composables/useLeaflet';
import type { OwnerNav, OrderInfo } from '../types/index.ts';
import image from '../assets/comment2.jpg';
import { Icon } from '@iconify/vue';

const navs: Array<OwnerNav> = [
  {
    icon: 'ic:baseline-home',
    title: 'Dashboard',
  },

  {
    icon: 'material-symbols:person',
    title: 'My Profile',
  },

  {
    icon: 'ion:wallet',
    title: 'My Wallet',
  },

  {
    icon: 'ant-design:insurance-filled',
    title: 'Insurance & Policy',
  },

  {
    icon: 'uil:exit',
    title: 'Sign Out',
  },
];

const orders: Array<OrderInfo> = [
  {
    icon: 'mingcute:history-anticlockwise-fill',
    title: 'Turn Over',
    number: 232,
  },

  {
    icon: 'ion:wallet',
    title: 'Your Wallet',
    number: 3212,
  },
  {
    icon: 'solar:hand-money-linear',
    title: 'Drivee Returns',
    number: 234,
  },
];

const cars = ref<CarResponse[] | null>([]);
const isLoading = ref(true);
const bookings = ref();
const {
  mapContainer,
  leafletMap,
  isMapInitialized,
  initMap,
  addMarkers,
  flyTo,
} = useLeaflet();
const { user } = useUserStore();
const { get } = useClient();
onBeforeMount(async () => {
  try {
    const res = await get('/owner/bookings', {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.data.status === 'success') {
      // console.log(res.data.message);
      bookings.value = res.data.message;
      isLoading.value = false;
      // console.log(bookings.value);
    } else {
      console.log(res.data);
      bookings.value = res.data.message;
      isLoading.value = false;
    }
  } catch (error: any) {
    console.log(error);
  }
  try {
    const res = await get('/owner/cars', {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.data.status === 'success') {
      cars.value = res.data.message;
    } else {
      console.log(res.data.message);
    }
  } catch (error: any) {
    console.log(error);
  }
});

// TODO: fetch cars owned by the owner and display it on the map with flyto when clicked

onMounted(() => {
  initMap();
  if (leafletMap.value) {
    // Map click event
    leafletMap.value.on('click', (e: L.LeafletMouseEvent) => {
      // handle click event
      console.log(e);
    });

    // Add initial markers
    updateMarkers();
  }
});

const leafletMarkers = ref<Marker[]>([]);

const updateMarkers = (): void => {
  if (!isMapInitialized.value) return;

  // Map car locations to marker data
  const markerCoordinates: MarkerData[] = cars?.value?.map((c: any) => {
    return {
      position: { lat: c?.location?.X, lng: c?.location?.Y } as LatLngLiteral,
      id: `${c?.make} ${c?.model}`,
      title: `${c?.make} ${c?.model}`,
      image: `${c?.thumbnail_picture}`,
    } as MarkerData;
  }) as MarkerData[];

  // Add markers first
  leafletMarkers.value = addMarkers(markerCoordinates as MarkerData[]);

  // Then center map on first car if available
  if (markerCoordinates.length > 0 && leafletMap.value) {
    let holder = markerCoordinates[0].position as LatLngLiteral;
    const firstCar = {
      lat: holder.lat,
      lng: holder.lng,
    };
    // Use setView to center the map
    leafletMap.value.setView(firstCar, 6, {
      animate: true,
    });
  }

  // Add click handlers to markers
  leafletMarkers.value.forEach((marker) => {
    marker.on('click', () => {
      if (leafletMap.value) {
        // handle markers on click
        flyTo(marker.getLatLng());
      }
    });
  });
};

watch(
  () => cars.value,
  () => {
    updateMarkers();
  },
  { deep: true },
);
</script>
<template>
  <div class="bg-gray-50 w-full min-h-screen">
    <div class="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <!-- Dashboard Header -->
      <div
        class="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-600 capitalize mb-6 md:mb-10"
      >
        Dashboard
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Left Sidebar: Profile -->
        <div class="lg:col-span-3 space-y-6">
          <!-- Profile Card -->
          <div
            class="border-gray-200 border-2 rounded-xl flex flex-col py-6 px-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div class="flex flex-col items-center">
              <img
                :src="image"
                alt="profile_image"
                class="w-28 h-28 md:w-32 md:h-32 rounded-full object-center object-cover inline-block mb-5 border-4 border-gray-100 shadow-sm"
              />
              <div
                class="text-2xl md:text-3xl font-semibold mb-1 text-center capitalize"
              >
                Rovan Reels
              </div>
              <div class="text-md md:text-lg text-gray-400 text-center">
                rovanreels@gmail.com
              </div>
            </div>
            <div class="flex flex-col mt-6">
              <div
                v-for="i in navs"
                class="w-full py-3 px-4 cursor-pointer hover:bg-black hover:text-white hover:font-bold rounded-xl flex items-center font-[500] transition-all duration-300 transform hover:translate-x-1"
              >
                <Icon
                  :icon="i.icon"
                  class="text-xl md:text-2xl inline-block mr-4"
                />
                <div class="text-lg capitalize">{{ i.title }}</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Content Area -->
        <div class="lg:col-span-9 space-y-6">
          <!-- Order Stats Cards -->
          <div
            class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            <div
              v-for="i in orders"
              class="p-5 md:p-6 border-gray-200 border-2 rounded-xl flex flex-col bg-white shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-300"
            >
              <Icon
                :icon="i.icon"
                class="text-3xl md:text-4xl text-black mb-4"
              />
              <div class="text-3xl md:text-4xl font-bold mb-2">
                ${{ i.number }}
              </div>
              <div class="text-gray-400 font-semibold text-xl capitalize">
                {{ i.title }}
              </div>
            </div>
          </div>

          <!-- Orders Table -->
          <div
            class="bg-white rounded-xl border-2 border-gray-200 p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            v-if="!isLoading"
          >
            <div class="text-2xl md:text-3xl font-bold capitalize mb-6">
              My Recent Order
            </div>

            <!-- Table with fixed header and scrollable body -->
            <div
              class="w-full relative rounded-lg overflow-hidden border border-gray-200"
            >
              <div
                class="w-full min-h-58 flex font-normal text-2xl justify-center items-center"
                v-if="!bookings"
              >
                Oops...There is no booking
              </div>
              <!-- Table Header (Fixed) -->
              <table class="w-full table-auto" v-if="!isLoading && bookings">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      class="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider sticky top-0 bg-gray-50 z-10"
                    >
                      Booking No
                    </th>
                    <th
                      class="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider sticky top-0 bg-gray-50 z-10"
                    >
                      Vehicle
                    </th>
                    <th
                      class="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider sticky top-0 bg-gray-50 z-10 hidden md:table-cell"
                    >
                      Pick Up Location
                    </th>
                    <th
                      class="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider sticky top-0 bg-gray-50 z-10 hidden sm:table-cell"
                    >
                      Date
                    </th>
                    <th
                      class="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider sticky top-0 bg-gray-50 z-10 hidden lg:table-cell"
                    >
                      Return Date
                    </th>
                    <th
                      class="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider sticky top-0 bg-gray-50 z-10"
                    >
                      Payment
                    </th>
                    <th
                      class="px-4 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider sticky top-0 bg-gray-50 z-10"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
              </table>
              <!-- Table Body (Scrollable) -->
              <div
                class="max-h-80 overflow-y-auto"
                v-if="!isLoading && bookings"
              >
                <table class="w-full table-auto">
                  <tbody class="divide-y divide-gray-200">
                    <tr
                      v-for="b in bookings"
                      :key="b.id"
                      class="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td
                        class="px-4 py-3 whitespace-nowrap text-sm text-gray-600"
                      >
                        {{ b?.id }}
                      </td>
                      <td
                        class="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                      >
                        {{ b?.car_id }}
                      </td>
                      <td
                        class="px-4 py-3 whitespace-nowrap text-sm text-gray-600 hidden md:table-cell"
                      >
                        Effle Tower, NewYork
                      </td>
                      <td
                        class="px-4 py-3 whitespace-nowrap text-sm text-gray-600 hidden sm:table-cell"
                      >
                        {{ format(b?.start_time, 'MMM dd,yyyy') }}
                      </td>
                      <td
                        class="px-4 py-3 whitespace-nowrap text-sm text-gray-600 hidden lg:table-cell"
                      >
                        {{ format(b?.end_time, 'MMM dd,yyyy') }}
                      </td>
                      <td
                        class="px-4 py-3 whitespace-nowrap text-sm text-gray-600"
                      >
                        ${{ b?.total_price }}
                      </td>
                      <td class="px-4 py-3 whitespace-nowrap text-sm">
                        <span
                          class="rounded-full bg-green-500 text-white text-xs inline-block px-3 py-1"
                        >
                          {{ b?.status }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Map/Chart Section -->
      <div
        class="mt-10 relative w-full border-gray-200 border-2 bg-white rounded-xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
      >
        <div class="pb-2 md:pb-4">
          <div class="capitalize font-semibold text-lg md:text-xl">
            real-time
          </div>
        </div>

        <div
          class="md:absolute top-0 right-0 bg-transparent p-4 md:p-6 isolate"
        >
          <div
            class="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <Icon icon="ph:dots-three-outline-vertical-fill" class="text-xl" />
          </div>
        </div>

        <div ref="mapContainer" class="mt-16 md:mt-0 md:py-8 h-[32rem]">
          <!-- <img -->
          <!--   :src="Earth" -->
          <!--   alt="World map" -->
          <!--   class="inline-block w-full h-auto object-contain max-h-[400px]" -->
          <!-- /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
