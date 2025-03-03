<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { CustomerNav } from "../types/index.ts";
import { RouterView, RouterLink } from "vue-router";
const navs: Array<CustomerNav> = [
  {
    icon: "ic:baseline-home",
    title: "Dashboard",
    route: "/dashboard/customer/",
  },

  {
    icon: "material-symbols:person",
    title: "My Profile",
    route: "/dashboard/customer/profile/",
  },

  {
    icon: "uis:calender",
    title: "My Order",
    route: "/dashboard/customer/order/",
  },

  {
    icon: "ant-design:insurance-filled",
    title: "Insurance & Policy",
    route: "/insuratance-and-policy/",
  },

  {
    icon: "uil:exit",
    title: "Sign Out",
    route: "/",
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
          <router-link
            v-for="i in navs"
            :to="i.route"
            class="w-full py-5 px-6 cursor-pointer hover:bg-gray-200 rounded-xl flex font-[500] transition-colors duration-300 mb-2"
            :class="[
              i.route == $route.fullPath
                ? 'bg-black! text-white font-bold'
                : '',
            ]"
          >
            <Icon :icon="i.icon" class="text-2xl inline-block mr-8" />
            <div class="text-xl capitalize">{{ i.title }}</div>
          </router-link>
        </div>
      </div>
      <router-view> </router-view>
    </div>
  </div>
</template>
<style scoped></style>
