<script lang="ts" setup></script>
<template>
  <div
    class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
  >
    <div class="px-6 pt-6">
      <!-- Header skeleton -->
      <div class="flex justify-between items-center mb-4">
        <div class="h-7 bg-gray-200 rounded-md w-32 animate-pulse"></div>
        <div class="h-6 bg-gray-200 rounded-full w-20 animate-pulse"></div>
      </div>

      <div class="overflow-x-auto pb-6">
        <!-- Table header skeleton -->
        <table class="w-full">
          <thead>
            <tr
              class="text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200"
            >
              <th class="px-4 py-3">
                <div class="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
              </th>
              <th class="px-4 py-3">
                <div class="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
              </th>
              <th class="px-4 py-3 hidden md:table-cell">
                <div class="h-3 bg-gray-200 rounded w-24 animate-pulse"></div>
              </th>
              <th class="px-4 py-3 hidden lg:table-cell">
                <div class="h-3 bg-gray-200 rounded w-12 animate-pulse"></div>
              </th>
              <th class="px-4 py-3 hidden lg:table-cell">
                <div class="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
              </th>
              <th class="px-4 py-3">
                <div class="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
              </th>
              <th class="px-4 py-3">
                <div class="h-3 bg-gray-200 rounded w-14 animate-pulse"></div>
              </th>
            </tr>
          </thead>
        </table>

        <!-- Table body skeleton -->
        <div class="overflow-x-auto pb-6">
          <table class="w-full">
            <tbody class="divide-y divide-gray-100">
              <!-- Skeleton rows -->
              <tr
                v-for="n in 5"
                :key="n"
                class="hover:bg-gray-50 transition-colors"
              >
                <td class="px-4 py-4">
                  <div class="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                </td>
                <td class="px-4 py-4">
                  <div class="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
                </td>
                <td class="px-4 py-4 hidden md:table-cell">
                  <div class="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
                </td>
                <td class="px-4 py-4 hidden lg:table-cell">
                  <div class="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                </td>
                <td class="px-4 py-4 hidden lg:table-cell">
                  <div class="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                </td>
                <td class="px-4 py-4">
                  <div class="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
                </td>
                <td class="px-4 py-4">
                  <div
                    class="h-6 bg-gray-200 rounded-full w-16 animate-pulse"
                  ></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
