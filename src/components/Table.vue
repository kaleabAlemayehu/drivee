<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue';
import { format } from 'date-fns';
import type { bookingsProp } from '../types/bookings';
const props = defineProps<{ bookings: bookingsProp }>();
const bookings = ref<bookingsProp>();
watchEffect(() => {
  bookings.value = props.bookings;
});
type BookingStatus = 'pending' | 'confirmed' | 'canceled' | 'completed';

const statusColor: Record<BookingStatus, string> = {
  pending: 'bg-amber-100 text-amber-800', // pending
  confirmed: 'bg-blue-100 text-blue-800', // confirmed
  canceled: 'bg-rose-100 text-rose-800', // cancelled
  completed: 'bg-green-100 text-green-800', // completed
};

const getStatusClass = (status: string) => {
  return statusColor[status as BookingStatus] || 'bg-gray-100 text-gray-800';
};
onMounted(() => {
  console.log('bookings', bookings.value);
});
</script>
<template>
  <div
    class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
  >
    <div class="px-6 pt-6">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-bold text-gray-800">{{ bookings?.title }}</h2>
        <span
          class="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full"
        >
          {{ bookings?.total }} Orders
        </span>
      </div>

      <div class="overflow-x-auto pb-6">
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
        <div
          class="w-full min-h-58 flex font-normal text-2xl justify-center items-center"
          v-if="bookings?.total === 0"
        >
          Oops...There is no booking
        </div>

        <div class="overflow-x-auto pb-6">
          <table class="w-full">
            <tbody class="divide-y divide-gray-100" v-if="bookings?.bookings">
              <tr
                class="hover:bg-gray-50 transition-colors"
                v-for="booking in bookings?.bookings"
                :key="booking?.bookingNo"
              >
                <td class="px-4 py-4 text-sm font-medium text-gray-900">
                  {{ booking?.bookingNo }}
                </td>
                <td class="px-4 py-4 text-sm text-gray-600">
                  {{ booking?.make }}
                  {{ booking?.model }}
                </td>
                <td
                  class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell"
                >
                  {{ booking?.pickUpLocation }}
                </td>
                <td
                  class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell"
                >
                  {{ format(booking?.pickUpDate, 'p MMM dd,yyyy') }}
                </td>
                <td
                  class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell"
                >
                  {{ format(booking?.returnDate, 'p MMM dd,yyyy') }}
                </td>
                <td class="px-4 py-4 text-sm font-medium text-gray-900">
                  {{ booking?.payment }} $
                </td>
                <td class="px-4 py-4 text-sm">
                  <span
                    :class="`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(booking?.status)}`"
                  >
                    {{ booking?.status }}
                  </span>
                </td>
              </tr>
              <!-- <tr class="hover:bg-gray-50 transition-colors"> -->
              <!--   <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
              <!--     #02323 -->
              <!--   </td> -->
              <!--   <td class="px-4 py-4 text-sm text-gray-600">Jeep Renegade</td> -->
              <!--   <td -->
              <!--     class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell" -->
              <!--   > -->
              <!--     Eiffel Tower, New York -->
              <!--   </td> -->
              <!--   <td -->
              <!--     class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
              <!--   > -->
              <!--     22/01/2024 -->
              <!--   </td> -->
              <!--   <td -->
              <!--     class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell" -->
              <!--   > -->
              <!--     28/01/2024 -->
              <!--   </td> -->
              <!--   <td class="px-4 py-4 text-sm font-medium text-gray-900"> -->
              <!--     $500 -->
              <!--   </td> -->
              <!--   <td class="px-4 py-4 text-sm"> -->
              <!--     <span -->
              <!--       class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800" -->
              <!--     > -->
              <!--       Completed -->
              <!--     </span> -->
              <!--   </td> -->
              <!-- </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
