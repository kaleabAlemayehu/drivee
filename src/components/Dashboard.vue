<script setup lang="ts">
import { Icon } from "@iconify/vue";
const orders: Array<object> = [
  {
    icon: "uis:calender",
    title: "Total Order",
    number: 3,
  },

  {
    icon: "mdi:tag",
    title: "coupons",
    number: 12,
  },
  {
    icon: "material-symbols:cancel",
    title: "Cancle Order",
    number: 24,
  },
];
</script>
<template>
  <div
    v-for="i in orders"
    class="col-span-2 px-8 py-12 w-full h-[16rem] border-gray-200 border-2 rounded-xl flex flex-col"
  >
    <Icon :icon="i.icon" class="text-4xl text-black mb-6" />
    <div class="text-4xl font-bold mb-4">
      {{ String(i.number).padStart(2, "0") }}
    </div>
    <div class="text-gray-500 text-2xl capitalize">{{ i.title }}</div>
  </div>
  <div
    class="h-min rounded-xl border-2 border-gray-200 row-span-2 col-span-6 p-8"
  >
    <div class="text-3xl font-bold capitalize mb-8">My Recent Order</div>
    <div class="w-full">
      <table class="w-full">
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
          <td>completed</td>
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
            <span class="rounded-full bg-green-500 inline-block px-3 py-2"
              >completed</span
            >
          </td>
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
      </table>
    </div>
  </div>
</template>
<style lang="css" scoped>
th {
  text-align: center;
  font-size: 20px;
  padding-block: 10px;
}

td {
  text-align: center;
  font-size: 18px;
  padding-block: 15px;
  padding-inline: 5px;
}
</style>
