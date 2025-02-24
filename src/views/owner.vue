<script setup lang="ts">
import { Icon } from "@iconify/vue";
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
    icon: "ion:wallet",
    title: "My Wallet",
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

const orders: Array<object> = [
  {
    icon: "mingcute:history-anticlockwise-fill",
    title: "Turn Over",
    number: 232,
  },

  {
    icon: "ion:wallet",
    title: "Your Wallet",
    number: 3212,
  },
  {
    icon: "solar:hand-money-linear",
    title: "Drivee Returns",
    number: 234,
  },
];
</script>
<template>
  <div class="bg-gray-50 w-full">
    <div class="w-4/5 mx-auto pt-42">
      <div class="text-5xl font-semibold text-gray-600 capitalize mb-14">
        Dashboard
      </div>
      <div class="grid grid-cols-9 grid-rows-3 gap-x-10 gap-y-8 my-8">
        <div
          class="h-[45.5rem] w-full border-gray-200 border-2 col-span-3 row-span-3 rounded-xl flex flex-col py-8 px-6 bg-white"
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
          class="col-span-2 px-8 py-12 w-full h-[16rem] border-gray-200 border-2 rounded-xl flex flex-col bg-white"
        >
          <Icon :icon="i.icon" class="text-4xl text-black mb-6" />
          <div class="text-4xl font-bold mb-4">${{ i.number }}</div>
          <div class="text-gray-400 font-semibold text-2xl capitalize">
            {{ i.title }}
          </div>
        </div>
        <div
          class="h-min bg-white rounded-xl border-2 border-gray-200 row-span-2 col-span-6 p-8"
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
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
