<script setup lang="ts">
import type { OwnerNav, OrderInfo } from "../types/index.ts";
import { Icon } from "@iconify/vue";
import Earth from "../assets/earth.svg";
const navs: Array<OwnerNav> = [
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

const orders: Array<OrderInfo> = [
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
    <div class="w-4/5 mx-auto py-42">
      <div class="text-5xl font-semibold text-gray-600 capitalize mb-14">
        Dashboard
      </div>
      <div class="grid grid-cols-9 grid-rows-3 gap-x-10 gap-y-8 mt-8">
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
              <thead>
                <tr>
                  <th>Booking No</th>
                  <th>Vehicle</th>
                  <th>Pick Up Location</th>
                  <th>Date</th>
                  <th>Return Date</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
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
                    <span
                      class="rounded-full bg-green-500 inline-block px-3 py-2"
                      >completed</span
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="w-full mb-18">
        <div
          class="relative fill-red-400 w-full h-auto border-gray-200 border-2 bg-white rounded-xl px-28 py-8"
        >
          <div class="absolute top-0 left-0 bg-transparent p-8">
            <div class="capitalize font-semibold text-xl mb-8">real-time</div>
            <div class="flex flex-col justify-between text-white w-min">
              <div class="p-2 bg-black mb-2 cursor-pointer">
                <Icon icon="material-symbols:add" class="text-xl" />
              </div>

              <div class="p-2 bg-black mb-2 cursor-pointer">
                <Icon icon="ic:baseline-minus" class="text-xl" />
              </div>
            </div>
          </div>

          <div class="absolute top-0 right-0 bg-transparent p-8">
            <div class="cursor-pointer p-2">
              <Icon
                icon="ph:dots-three-outline-vertical-fill"
                class="text-xl"
              />
            </div>
          </div>
          <img
            :src="Earth"
            alt=""
            class="inline-block w-full h-full object-contain fill-gray-800 stroke-black"
          />
          <!-- <img src="../assets/earth.svg" alt="" /> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
