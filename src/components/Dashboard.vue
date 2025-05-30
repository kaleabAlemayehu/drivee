<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { format } from 'date-fns';
import Table from '../components/Table.vue';
import TableSkeleton from '../components/TableSkeleton.vue';
import { type OrderInfo } from '../types/index.ts';
import type { bookings, APIBookingResponse } from '../types/bookings';
import { transformer } from '../utils/transformer';
import type { bookingsProp } from '../types/bookings';
import { getStatusClass } from '../utils/bookings';
import { ref, onBeforeMount, watch, onMounted } from 'vue';
import { useUserStore } from '../store/useUserStore';
import { useClient } from '../composables/useClient';
const orders: Array<OrderInfo> = [
  {
    icon: 'uis:calender',
    title: 'Total Order',
    number: 3,
  },

  {
    icon: 'mdi:tag',
    title: 'coupons',
    number: 12,
  },
  {
    icon: 'material-symbols:cancel',
    title: 'Cancle Order',
    number: 24,
  },
];
const booking = ref<bookings[]>();
const isLoading = ref(true);
const { user } = useUserStore();
const { get } = useClient();

onBeforeMount(async () => {
  try {
    const res = await get('/bookings/', {
      headers: { Authorization: `Bearer ${user.token}` },
    });
    if (res.data.status === 'success') {
      const BookingData: APIBookingResponse[] = Array.isArray(res.data.message)
        ? res.data.message
        : [];
      booking.value = (await transformer(BookingData)).slice(0, 5);
      console.log('mylog', booking.value);
      isLoading.value = false;
    } else {
      console.log(res.data);
      booking.value = res.data.message;
      isLoading.value = false;
    }
  } catch (error: any) {
    console.log(error);
    isLoading.value = false;
  }
});
onMounted(() => {
  // console.log('bookings', booking.value);
});
</script>

<template>
  <!-- Stats cards grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mb-6">
    <div
      v-for="(i, index) in orders"
      :key="index"
      class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
    >
      <div class="p-6 flex flex-col h-full">
        <div
          :class="`text-3xl text-black mb-3 transition-transform duration-300 group-hover:scale-110 transform origin-left`"
        >
          <Icon :icon="i.icon" />
        </div>
        <div class="mt-auto">
          <div class="text-3xl font-bold text-gray-800">
            {{ String(i.number).padStart(2, '0') }}
          </div>
          <div class="text-gray-500 text-sm font-medium mt-1">
            {{ i.title }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <TableSkeleton v-if="isLoading" />
  <!-- Recent orders table -->
  <div
    v-else
    class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden mb-6"
  >
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-gray-800">My Recent Orders</h2>
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
              <th class="px-4 py-3 hidden md:table-cell">Pick Up Location</th>
              <th class="px-4 py-3 hidden lg:table-cell">Date</th>
              <th class="px-4 py-3 hidden lg:table-cell">Return Date</th>
              <th class="px-4 py-3">Payment</th>
              <th class="px-4 py-3">Status</th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        class="w-full min-h-58 flex font-normal text-2xl justify-center items-center"
        v-if="!booking && !isLoading"
      >
        Oops...There is no booking
      </div>
      <div class="overflow-x-auto">
        <table class="w-full">
          <tbody class="divide-y divide-gray-100" v-if="!isLoading && booking">
            <tr
              v-for="b in booking"
              :key="b?.id"
              class="hover:bg-gray-50 transition-colors"
            >
              <td class="px-4 py-4 text-sm font-medium text-gray-900">
                #{{ b?.bookingNo }}
              </td>
              <td class="px-4 py-4 text-sm text-gray-600">
                {{ b.make }}
                {{ b.model }}
              </td>
              <td class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell">
                {{ b.pickUpLocation }}
              </td>
              <td class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell">
                {{ format(b.pickUpDate, 'p MMM dd,yyyy') }}
              </td>
              <td class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell">
                {{ format(b.returnDate, 'p MMM dd,yyyy') }}
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-900">
                {{ b.payment }} $
              </td>
              <td class="px-4 py-4 text-sm">
                <span
                  :class="`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(b.status)}`"
                >
                  {{ b.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped></style>
