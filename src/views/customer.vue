<script setup lang="ts">
import { Icon } from '@iconify/vue';
import type { CustomerNav } from '../types/index';
import { useUserStore } from '../store/useUserStore';
import { useClient } from '../composables/useClient';
import image from '../assets/comment2.jpg';
import dudeImage from '../assets/guywithlaptop.svg';
import flowerImage from '../assets/flowerpot.svg';
import desktopImage from '../assets/desktop.svg';
const navs: Array<CustomerNav> = [
  {
    icon: 'ic:baseline-home',
    title: 'Dashboard',
    route: '/dashboard/customer/',
  },

  {
    icon: 'material-symbols:person',
    title: 'My Profile',
    route: '/dashboard/customer/profile/',
  },

  {
    icon: 'uis:calender',
    title: 'My Order',
    route: '/dashboard/customer/order/',
  },

  {
    icon: 'ant-design:insurance-filled',
    title: 'Insurance & Policy',
    route: '/insuratance-and-policy/',
  },

  {
    icon: 'uil:exit',
    title: 'Sign Out',
    route: '/',
  },
];

const { user } = useUserStore();
</script>
<template>
  <!-- Hero section with gradient background and animated elements -->
  <div
    class="relative mt-16 h-[30vh] md:h-[40vh] w-full overflow-hidden text-white flex justify-center items-center"
  >
    <!-- Animated gradient background -->
    <div class="absolute inset-0 bg-black z-0">
      <div class="absolute inset-0 opacity-20">
        <div
          class="absolute h-96 w-96 rounded-full bg-blue-500 blur-3xl -top-20 -left-20"
        ></div>
        <div
          class="absolute h-96 w-96 rounded-full bg-purple-500 blur-3xl -bottom-20 -right-20"
        ></div>
      </div>
    </div>

    <!-- Dashboard title with animated underline -->
    <div class="relative z-10 text-center px-4">
      <h1 class="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
        My Dashboard
      </h1>
      <div
        class="h-1 w-20 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"
      ></div>
    </div>

    <!-- Decorative images with responsive positioning -->
    <img
      :src="dudeImage"
      alt=""
      class="absolute h-60 md:h-80 bottom-0 left-10 md:left-1/4 z-10 transition-all duration-700 hover:scale-105 origin-bottom hidden md:block"
    />

    <img
      :src="flowerImage"
      alt=""
      class="absolute h-32 md:h-40 bottom-5 left-5 md:left-[15%] z-20 transition-all duration-700 hover:rotate-12 hidden md:block"
    />

    <img
      :src="desktopImage"
      alt=""
      class="absolute h-48 md:h-64 bottom-0 right-10 md:right-1/4 z-20 transition-all duration-700 hover:scale-105 origin-bottom hidden md:block"
    />
  </div>

  <!-- Main content area -->
  <div class="w-full bg-gray-50">
    <div class="container mx-auto px-4 py-10">
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Sidebar profile and navigation -->
        <div class="w-full lg:w-1/4 mb-6 lg:mb-0">
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <!-- Profile section -->
            <div class="p-6 border-b border-gray-100">
              <div class="flex flex-col items-center">
                <div class="relative group">
                  <img
                    :src="user.profile_picture"
                    alt="Profile"
                    class="h-24 w-24 md:h-28 md:w-28 rounded-full object-cover border-4 border-white shadow-md transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h2 class="text-xl md:text-2xl font-bold mt-4 text-gray-800">
                  {{ user.first_name }}
                </h2>
                <p class="text-gray-500 flex items-center">
                  <svg
                    class="w-4 h-4 mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    ></path>
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    ></path>
                  </svg>
                  {{ user.email }}
                </p>
              </div>
            </div>

            <!-- Navigation links -->
            <div class="p-3">
              <router-link
                v-for="i in navs"
                :key="i.title"
                :to="i.route"
                class="flex items-center p-3 mb-1 rounded-xl font-medium transition-all duration-200"
                :class="[
                  i.route == $route.fullPath
                    ? 'bg-black text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100',
                ]"
              >
                <Icon :icon="i.icon" class="text-xl mr-3" />
                <span>{{ i.title }}</span>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Main content area -->
        <div class="w-full lg:w-3/4">
          <router-view class="h-full"> </router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
