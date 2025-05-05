<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { type OrderInfo } from '../types/index.ts';
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

// Helper functions for dynamic styling

const getStatusClass = (index: number) => {
  const statuses = [
    'bg-green-100 text-green-800', // completed
    'bg-blue-100 text-blue-800', // in progress
    'bg-amber-100 text-amber-800', // pending
    'bg-rose-100 text-rose-800', // cancelled
    'bg-green-100 text-green-800', // completed
  ];
  return statuses[index % statuses.length];
};

const getStatusText = (index: number) => {
  const statuses = [
    'Completed',
    'In Progress',
    'Pending',
    'Cancelled',
    'Completed',
  ];
  return statuses[index % statuses.length];
};
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

  <!-- Recent orders table -->
  <div
    class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden mb-6"
  >
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold text-gray-800">My Recent Orders</h2>
        <button
          class="text-indigo-600 hover:text-indigo-800 text-sm font-medium flex items-center transition-colors"
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
        </button>
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
          <tbody class="divide-y divide-gray-100">
            <tr
              v-for="(_, index) in 5"
              :key="index"
              class="hover:bg-gray-50 transition-colors"
            >
              <td class="px-4 py-4 text-sm font-medium text-gray-900">
                #02323
              </td>
              <td class="px-4 py-4 text-sm text-gray-600">Jeep Renegade</td>
              <td class="px-4 py-4 text-sm text-gray-600 hidden md:table-cell">
                Eiffel Tower, New York
              </td>
              <td class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell">
                22/01/2024
              </td>
              <td class="px-4 py-4 text-sm text-gray-600 hidden lg:table-cell">
                28/01/2024
              </td>
              <td class="px-4 py-4 text-sm font-medium text-gray-900">$500</td>
              <td class="px-4 py-4 text-sm">
                <span
                  :class="`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(index)}`"
                >
                  {{ getStatusText(index) }}
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
