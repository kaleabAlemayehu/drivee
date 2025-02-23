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
const navs: Array<object> = [
  {
    icon: "ic:baseline-home",
    title: "Dashboard",
  },

  {
    icon: "material-symbols:person",
    title: "My Profile",
  },

  {
    icon: "uis:calender",
    title: "My Order",
  },

  {
    icon: "ant-design:insurance-filled",
    title: "Insurance & Policy",
  },

  {
    icon: "uil:exit",
    title: "Sign Out",
  },
];
</script>
<template>
  <div
    class="h-[calc(100vh-20rem)] w-full bg-black relative overflow-hidden text-white flex justify-center items-center -z-10"
  >
    <div class="flex mx-auto min-w-5/6 px-10 justify-center">
      <div class="text-5xl leading-22 text-center font-semibold capitalize">
        My Dashboard
      </div>

      <img
        src="./../assets/guywithlaptop.svg"
        alt=""
        class="absolute h-90 bottom-0 left-100 z-10 m-0"
      />

      <img
        src="./../assets/flowerpot.svg"
        alt=""
        class="h-50 absolute bottom-0 left-65 z-200 m-0"
      />

      <img
        src="./../assets/desktop.svg"
        alt=""
        class="h-80 absolute bottom-0 right-65 z-200 m-0"
      />
    </div>
  </div>
  <div class="w-full bg-white">
    <div
      class="w-4/5 mx-auto my-18 grid grid-cols-9 grid-rows-3 gap-x-10 gap-y-8"
    >
      <div
        class="h-[45.5rem] w-full border-gray-200 border-2 col-span-3 row-span-3 rounded-xl flex flex-col py-8 px-6"
      >
        <div class="flex flex-col items-center">
          <img
            src="/comment2.jpg"
            alt=""
            class="size-50 rounded-full object-center object-cover inline-block mb-5"
          />
          <div class="text-3xl font-semibold mb-1 text-center capitalize">
            Rovan Reels
          </div>
          <div class="text-lg text-gray-400 text-center">
            rovanreels@gmail.com
          </div>
        </div>
        <div class="flex flex-col mt-4">
          <div
            v-for="i in navs"
            class="w-full py-5 px-6 cursor-pointer hover:bg-black hover:text-white hover:font-bold rounded-xl flex font-[500] transition-colors duration-300"
          >
            <Icon :icon="i.icon" class="text-2xl inline-block mr-8" />
            <div class="text-xl capitalize">{{ i.title }}</div>
          </div>
        </div>
      </div>
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
    </div>
  </div>
</template>
<style scoped>
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
