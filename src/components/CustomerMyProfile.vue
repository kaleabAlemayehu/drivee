<script setup lang="ts"></script>
<template>
  <div
    class="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
  >
    <div class="p-6">
      <h2 class="text-xl font-bold text-gray-800 mb-6">Profile Information</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="space-y-2">
          <label for="user_name" class="block text-sm font-medium text-gray-700"
            >Username</label
          >
          <div class="relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <input
              type="text"
              name="username"
              id="user_name"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 sm:text-sm border-gray-300 rounded-lg bg-gray-50"
              placeholder="Enter Username"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <div class="relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            <input
              type="email"
              name="email"
              id="email"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 sm:text-sm border-gray-300 rounded-lg bg-gray-50"
              placeholder="Enter Email"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >New Password</label
          >
          <div class="relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 sm:text-sm border-gray-300 rounded-lg bg-gray-50"
              placeholder="***************"
            />
          </div>
        </div>

        <div class="space-y-2">
          <label
            for="confirm_password"
            class="block text-sm font-medium text-gray-700"
            >Re-Enter Password</label
          >
          <div class="relative rounded-md shadow-sm">
            <div
              class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
              <svg
                class="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <input
              type="password"
              name="confirm_password"
              id="confirm_password"
              class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-3 py-3 sm:text-sm border-gray-300 rounded-lg bg-gray-50"
              placeholder="***************"
            />
          </div>
        </div>
      </div>

      <div class="mt-8">
        <button
          class="bg-black text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 cursor-pointer"
        >
          Update Profile
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
