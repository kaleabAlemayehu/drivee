<script setup lang="ts"></script>
<template>
  <div class="col-span-6 row-span-5 h-min grid grid-rows-3 gap-x-10 gap-y-8">
    <div class="w-full border-gray-200 border-2 rounded-xl px-10 py-8">
      <div class="text-3xl font-bold capitalize mb-6">Booking Order</div>
      <table class="w-full text-gray-600!">
        <tr>
          <th>Booking No</th>
          <th>Vehicle</th>
          <th>Pick Up Location</th>
          <th>Date</th>
          <th>Return Date</th>
          <th>Payment</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>#02323</td>
          <td>Jeep Renegade</td>
          <td>Effle Tower, NewYork</td>
          <td>22/01/2024</td>
          <td>28/01/2024</td>
          <td>$500</td>
          <td>completed</td>
        </tr>

        <tr>
          <td>#02323</td>
          <td>Jeep Renegade</td>
          <td>Effle Tower, NewYork</td>
          <td>22/01/2024</td>
          <td>28/01/2024</td>
          <td>$500</td>
          <td>
            <span
              class="rounded-full bg-amber-500 inline-block px-3 py-2 text-white font-semibold"
              >completed</span
            >
          </td>
        </tr>
      </table>
    </div>
    <div class="w-full border-gray-200 border-2 rounded-xl px-10 py-8">
      <div class="text-3xl font-bold capitalize mb-6">Completed Order</div>
      <table class="w-full text-gray-600!">
        <tr>
          <th>Booking No</th>
          <th>Vehicle</th>
          <th>Pick Up Location</th>
          <th>Date</th>
          <th>Return Date</th>
          <th>Payment</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>#02323</td>
          <td>Jeep Renegade</td>
          <td>Effle Tower, NewYork</td>
          <td>22/01/2024</td>
          <td>28/01/2024</td>
          <td>$500</td>
          <td>completed</td>
        </tr>

        <tr>
          <td>#02323</td>
          <td>Jeep Renegade</td>
          <td>Effle Tower, NewYork</td>
          <td>22/01/2024</td>
          <td>28/01/2024</td>
          <td>$500</td>
          <td>
            <span
              class="rounded-full bg-green-500 inline-block px-3 py-2 text-white font-semibold"
              >completed</span
            >
          </td>
        </tr>
      </table>
    </div>
    <div class="w-full border-gray-200 border-2 rounded-xl px-10 py-8">
      <div class="text-3xl font-bold capitalize mb-6">Order Canclled</div>
      <table class="w-full text-gray-600!">
        <tr>
          <th>Booking No</th>
          <th>Vehicle</th>
          <th>Pick Up Location</th>
          <th>Date</th>
          <th>Return Date</th>
          <th>Payment</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>#02323</td>
          <td>Jeep Renegade</td>
          <td>Effle Tower, NewYork</td>
          <td>22/01/2024</td>
          <td>28/01/2024</td>
          <td>$500</td>
          <td>completed</td>
        </tr>

        <tr>
          <td>#02323</td>
          <td>Jeep Renegade</td>
          <td>Effle Tower, NewYork</td>
          <td>22/01/2024</td>
          <td>28/01/2024</td>
          <td>$500</td>
          <td>
            <span
              class="rounded-full bg-red-500 inline-block px-3 py-2 text-white font-semibold"
              >completed</span
            >
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped></style>
