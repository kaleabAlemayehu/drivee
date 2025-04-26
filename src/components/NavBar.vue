<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { NavBarNav } from "../types/index.ts";
import { RouterLink } from "vue-router";
import { Icon } from "@iconify/vue";
const wrapper = ref<HTMLElement | null>(null);
const pages: Array<string> = ["Hostings", "Contact Us", "Account"];
onMounted(() => {
  if (!wrapper.value) return;
  window.addEventListener("scroll", (e) => {
    e.preventDefault();
    if (window.scrollY > 70) {
      wrapper.value?.classList.add("scrollOn");
    } else {
      wrapper.value?.classList.remove("scrollOn");
    }
  });
});
// const hosting: Array<NavBarNav> = [
//   {
//     name: "Car Hosting & Referals",
//     route: "/car-hosting/",
//   },
//   {
//     name: "Bike Hosting & Referals",
//     route: "/bike-hosting/",
//   },
// ];
const account: Array<NavBarNav> = [
  {
    title: "Owner Account",
    route: "/dashboard/owner/",
  },
  {
    title: "Customer Account",
    route: "/dashboard/customer/",
  },
];
</script>
<template>
  <div
    ref="wrapper"
    class="w-full flex items-center z-100 py-2 fixed top-0 right-0 left-0 transition-all duration-300 bg-gray-950 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 text-white"
  >
    <div
      class="grid grid-cols-3 justify-between items-center px-10 min-h-20 mx-auto min-w-5/6"
    >
      <router-link
        to="/"
        class="text-2xl font-semibold cursor-pointer select-none"
        >Drivee</router-link
      >
      <div class="flex items-stretch justify-between">
        <div
          class="group relative h-full my-0 flex items-center text-base font-normal cursor-pointer z-20"
          v-for="i in pages"
          :key="i"
        >
          <div class="mr-1">
            {{ i }}
          </div>
          <Icon
            icon="lucide:chevron-down"
            class="inline dark:text-white text-xl"
          />
          <div
            class="absolute z-10 top-[calc(2*70%)] bg-inherit w-42 overflow-hidden rounded-b-lg transform transition-transform duration-300 delay-300 origin-top group-hover:scale-y-100 hover:scale-y-100 group-hover:h-auto group-hover:opacity-100 scale-y-0 opacity-0 flex-col flex"
          >
            <router-link
              v-for="i in account"
              :key="i.title"
              :to="i.route"
              class="text-inherit py-2 px-4 hover:bg-inherit/80 w-full"
            >
              {{ i.title }}
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex justify-end gap-x-6 text-lg">
        <router-link
          to="/sign-in/"
          class="select-none rounded-md border-white border-[1px] outline-none ring-0 py-3 px-5 text-white bg-black cursor-pointer"
        >
          Sign In
        </router-link>
        <router-link
          to="/signup/"
          class="select-none rounded-md border-black border-[1px] outline-none ring-0 py-3 px-5 text-black bg-white cursor-pointer"
        >
          Sign Up
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.scrollOn {
  background: #fff !important;
  color: #000;
  padding-block: 1rem;
}
</style>
