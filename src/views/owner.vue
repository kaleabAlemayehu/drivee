<script setup lang="ts">
import 'leaflet/dist/leaflet.css';
import * as L from 'leaflet';
import type { LatLngLiteral, Marker } from 'leaflet';
import type { MarkerData } from '../types/map';
import type { CarResponse } from '../types/car';
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
    isLoading.value = false;
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
            class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div class="p-6 border-b border-gray-100">
              <div class="flex flex-col items-center">
                <div class="relative group">
                  <img
                    :src="user.profile_picture"
                    alt="Profile"
                    class="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h2 class="text-xl md:text-2xl font-bold mt-4 text-gray-800">
                  {{ user.first_name }}
                </h2>
                <p class="text-gray-500 flex items-center">
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    ></path>
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    ></path>
                  </svg>
                  {{ user.email }}
                </p>
              </div>
            </div>
            <div class="p-3">
              <div
                v-for="i in navs"
                :key="i"
                class="flex items-center p-3 mb-1 rounded-xl font-medium transition-all duration-200 cursor-pointer hover:bg-gray-100"
                :class="[
                  i.route == $route.fullPath
                    ? 'bg-black text-white shadow-md'
                    : 'text-gray-700',
                ]"
              >
                <Icon :icon="i.icon" class="text-xl mr-3" />
                <span class="capitalize">{{ i.title }}</span>
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
              :key="i"
              class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div class="p-6 flex flex-col h-full">
                <div
                  class="text-3xl text-black mb-3 transition-transform duration-300 group-hover:scale-110 transform origin-left"
                >
                  <Icon :icon="i.icon" />
                </div>
                <div class="mt-auto">
                  <div class="text-3xl font-bold text-gray-800">
                    ${{ i.number }}
                  </div>
                  <div
                    class="text-gray-500 text-sm font-medium mt-1 capitalize"
                  >
                    {{ i.title }}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Orders Table -->
          <div
            class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
            v-if="!isLoading"
          >
            <div class="p-6">
              <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-bold text-gray-800">
                  My Recent Orders
                </h2>
                <router-link
                  to="/dashboard/customer/order/"
                  class="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center transition-colors cursor-pointer"
                >
                  View All
                  <svg
                    class="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </router-link>
              </div>

              <div class="overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr
                      class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
                    >
                      <th class="px-4 py-3">Booking No</th>
                      <th class="px-4 py-3">Vehicle</th>
                      <th class="px-4 py-3 hidden md:table-cell">
                        Pick Up Location
                      </th>
                      <th class="px-4 py-3 hidden lg:table-cell">Date</th>
                      <th class="px-4 py-3 hidden lg:table-cell">
                        Return Date
                      </th>
                      <th class="px-4 py-3">Payment</th>
                      <th class="px-4 py-3">Status</th>
                    </tr>
                  </thead>
                </table>
              </div>

              <div
                class="w-full min-h-58 flex font-normal text-2xl justify-center items-center"
                v-if="!bookings"
              >
                Oops...There is no booking
              </div>

              <div class="overflow-x-auto">
                <table class="w-full">
                  <tbody
                    class="divide-y divide-gray-100"
                    v-if="!isLoading && bookings"
                  >
                    <tr
                      v-for="b in bookings"
                      :key="b.id"
                      class="hover:bg-gray-50 transition-colors"
                    >
                      <td class="px-4 py-4 text-sm font-medium text-gray-900">
                        #{{ b?.id }}
                      </td>
                      <td class="px-4 py-4 text-sm text-gray-600">
                        {{ b?.car_id }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell"
                      >
                        Effle Tower, NewYork
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell"
                      >
                        {{ format(b?.start_time, 'MMM dd,yyyy') }}
                      </td>
                      <td
                        class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell"
                      >
                        {{ format(b?.end_time, 'MMM dd,yyyy') }}
                      </td>
                      <td class="px-4 py-4 text-sm font-medium text-gray-900">
                        ${{ b?.total_price }}
                      </td>
                      <td class="px-4 py-4 text-sm">
                        <span
                          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
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
        class="mt-10 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold text-gray-800 capitalize">
              Real-time
            </h2>
            <div
              class="cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <Icon
                icon="ph:dots-three-outline-vertical-fill"
                class="text-xl"
              />
            </div>
          </div>

          <div ref="mapContainer" class="h-[32rem]">
            <!-- Map content goes here -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
