<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  currentPage: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
  totalCount: number;
  pageSize?: number;
}

const props = withDefaults(defineProps<Props>(), {
  pageSize: 10,
});

const emit = defineEmits<{
  'page-change': [page: number];
  'page-size-change': [size: number];
}>();

// Calculate visible page numbers
const visiblePages = computed(() => {
  const delta = 2; // Number of pages to show on each side of current page
  const range = [];

  for (
    let i = Math.max(2, props.currentPage - delta);
    i <= Math.min(props.totalPages - 1, props.currentPage + delta);
    i++
  ) {
    range.push(i);
  }

  return range;
});

const showFirstPage = computed(() => {
  return props.totalPages > 1 && !visiblePages.value.includes(1);
});

const showLastPage = computed(() => {
  return props.totalPages > 1 && !visiblePages.value.includes(props.totalPages);
});

const showFirstEllipsis = computed(() => {
  return visiblePages.value.length > 0 && visiblePages.value[0] > 2;
});

const showLastEllipsis = computed(() => {
  return (
    visiblePages.value.length > 0 &&
    visiblePages.value[visiblePages.value.length - 1] < props.totalPages - 1
  );
});
</script>
<template>
  <div
    class="bg-inherit flex flex-col items-center justify-center space-y-4 py-8"
  >
    <!-- Pagination Buttons -->
    <div class="flex items-center space-x-2">
      <!-- Previous Button -->
      <button
        @click="emit('page-change', currentPage - 1)"
        :disabled="!hasPrev"
        class="cursor-pointer flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500 transition-colors duration-200"
      >
        <svg
          class="w-4 h-4 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Previous
      </button>

      <!-- Page Numbers -->
      <div class="flex items-center space-x-1">
        <!-- First Page -->
        <button
          v-if="showFirstPage"
          @click="emit('page-change', 1)"
          :class="[
            'cursor-pointer px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
            1 === currentPage
              ? 'text-white bg-black border border-black hover:bg-gray-800'
              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700',
          ]"
        >
          1
        </button>

        <!-- First Ellipsis -->
        <span v-if="showFirstEllipsis" class="px-3 py-2 text-gray-500"
          >...</span
        >

        <!-- Visible Page Numbers -->
        <button
          v-for="page in visiblePages"
          :key="page"
          @click="emit('page-change', page)"
          :class="[
            'cursor-pointer px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
            page === currentPage
              ? 'text-white bg-black border border-black hover:bg-gray-800'
              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700',
          ]"
        >
          {{ page }}
        </button>

        <!-- Last Ellipsis -->
        <span v-if="showLastEllipsis" class="px-3 py-2 text-gray-500">...</span>

        <!-- Last Page -->
        <button
          v-if="showLastPage"
          @click="emit('page-change', totalPages)"
          :class="[
            'cursor-pointer px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
            totalPages === currentPage
              ? 'text-white bg-black border border-black hover:bg-gray-800'
              : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50 hover:text-gray-700',
          ]"
        >
          {{ totalPages }}
        </button>
      </div>

      <!-- Next Button -->
      <button
        @click="emit('page-change', currentPage + 1)"
        :disabled="!hasNext"
        class="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500 transition-colors duration-200"
      >
        Next
        <svg
          class="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
