<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
<template>
  <div class="w-4/10 h-full py-6 px-5">
    <div class="text-4xl text-center font-bold my-4 capitalize">
      Easy Onboarding
    </div>
    <div class="flex flex-col">
      <div class="flex">
        <div class="flex flex-col my-1 items-center">
          <Icon icon="lucide:car-front" class="text-3xl" />
          <div class="size-3 bg-black rounded-full mx-2"></div>
          <div class="w-1 p-0 m-0 -mt-1 h-30 bg-black rounded-full"></div>
        </div>
        <div class="w-full px-8">
          <div class="text-3xl font-normal capitalize mb-2">Sign up</div>
          <div class="text-black text-sm">
            On the signup form, you'll tell us about you and your car. Give your
            car a name, and continue to the next step.
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col my-1 items-center mx-0">
          <Icon
            icon="mdi:account-convert"
            class="text-3xl inline-block m-0 p-0"
          />
          <div class="w-1 p-0 m-0 mt-1 h-30 bg-black rounded-full"></div>
        </div>
        <div class="w-full px-8">
          <div class="text-3xl font-normal capitalize mb-2">
            create a profile
          </div>
          <div class="text-black text-sm">
            if you have multiple vehicles, use the car manager to creat a
            profile for each one. Listing each car costs $100 for initial setup
            and $20 per month &horbar; but you won't be charged until your car
            is ready for bookings.
          </div>
        </div>
      </div>
      <div class="flex">
        <div class="flex flex-col my-1 items-center mx-0">
          <Icon
            icon="mdi:file-document"
            class="text-3xl inline-block m-0 p-0"
          />
          <div class="w-1 p-0 m-0 mt-1 h-30 bg-black rounded-full"></div>
        </div>
        <div class="w-full px-8">
          <div class="text-3xl font-normal capitalize mb-2">
            Install Drivee Connect &reg;
          </div>
          <div class="text-black text-sm">
            We'll read out to have your proprietary hadware, Getaroud
            Connect&reg;, install in your car, Connect&reg; lets guests unlock
            the car with their phone, and gives you insights about the car,
            trips, and vehicle security. Once Connect&reg; is installed, you're
            ready for booking!
          </div>
        </div>
      </div>
      <div class="flex flex-col my-0 items-start mx-0">
        <div class="size-4 p-0 mx-2 bg-black rounded-full"></div>
      </div>
    </div>
    <div class="py-8 px-8 mt-10 bg-white w-8/10 shadow-xl rounded-lg">
      <div class="text-lg font-semibold">Start earning</div>
      <p class="text-gray-700 text-sm">
        As soon as you enable bookings, guests can start taking trips in your
        car &horbar; and you can start earning money.
      </p>
    </div>
  </div>
</template>
<style scoped></style>
