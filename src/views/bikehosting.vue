<script setup lang="ts">
import GetStartedForm from "../components/GetStartedForm.vue";
import ReferForm from "../components/ReferForm.vue";
import { Icon } from "@iconify/vue";
import rentBikeImage from "../assets/rentBike.jpg";
</script>
<template>
  <div
    class="h-[calc(100vh-10rem)] w-full bg-bike-hosting bg-center bg-cover object-scale-down bg-no-repeat flex justify-center items-center"
  >
    <div
      class="bg-black/50 w-full h-full m-0 p-0 flex justify-center items-center"
    >
      <div class="flex flex-col justify-center items-center">
        <div
          class="text-6xl font-semibold text-white text-center capitalize mb-9"
        >
          Turn your bike into extra money
        </div>
        <div class="text-white text-lg w-7/10 text-center mb-9">
          When you list your bike, you're earning money while helping others
          navigate your city. it's a win-win, and your next big opportunity.
        </div>
        <div
          class="bg-white px-6 py-3 font-bold text-black capitalize rounded-lg select-none inline cursor-pointer"
        >
          Share Your bike
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-white h-[calc(100vh-10rem)] w-full mx-auto p-0 mb-32 relative top-0 right-0 left-0 grid grid-cols-2"
  >
    <div
      class="absolute right-2/5 top-50 z-10 bg-white flex flex-col items-start h-max justify-between mx-auto p-15 px-25 rounded-3xl border-[1px] border-gray-200 shadow-gray-300 shadow-2xl w-[calc(60%-12.5rem)]"
    >
      <div
        class="bg-gray-400 size-7 rounded-full absolute bottom-10 right-1/2 transform translate-x-1/2"
      ></div>
      <div class="text-5xl w-4/5 my-8 font-semibold text-black capitalize">
        Earn up to $1000 for adding a new bike
      </div>
      <div
        class="text-gray-800 font-light text-lg leading-10 h-max capitalize text-start"
      >
        We'll Use Your Car's Location To Calculate Your Onboard Bonus. Each ZIP
        Code Will Belogn to One Of Five Zones. Zones Are Based On Guest Demand
        For Cars. Zone 1 gets the highest bonus, while zones 4 and 5 aren't
        Eligible for the Onboard Bonus.
      </div>
      <div
        class="select-none inline-flex justify-between w-48 px-8 py-4 bg-black rounded-md my-16 cursor-pointer"
      >
        <div class="text-white">Learn More</div>
        <Icon
          icon="lucide:arrow-up-right"
          class="inline dark:text-white text-white text-2xl"
        />
      </div>
    </div>
    <div class=""></div>
    <div class="flex items-start justify-start">
      <img :src="rentBikeImage" class="object-contain h-full w-full" />
    </div>
  </div>
  <div class="h-screen w-full bg-world bg-center bg-no-repeat bg-cover py-16">
    <div class="w-5/6 px-10 mx-auto flex justify-between">
      <GetStartedForm />
      <div class="w-4/10 h-full py-6 px-5">
        <div class="text-4xl text-center font-bold my-4 capitalize">
          Easy Onboarding
        </div>
        <div class="flex flex-col">
          <div class="flex">
            <div class="flex flex-col my-1 items-center">
              <Icon icon="healthicons:basic-motorcycle" class="text-4xl" />
              <div class="size-3 bg-black rounded-full mx-2"></div>
              <div class="w-1 p-0 m-0 -mt-1 h-30 bg-black rounded-full"></div>
            </div>
            <div class="w-full px-8">
              <div class="text-3xl font-normal capitalize mb-2">Sign up</div>
              <div class="text-black text-sm">
                On the signup form, you'll tell us about you and your bike. Give
                your bike a name, and continue to the next step.
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
                if you have multiple vehicles, use the bike manager to creat a
                profile for each one. Listing each bike costs $100 for initial
                setup and $20 per month &horbar; but you won't be charged until
                your bike is ready for bookings.
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
                Connect&reg;, install in your bike, Connect&reg; lets guests
                unlock the bike with their phone, and gives you insights about
                the bike, trips, and vehicle security. Once Connect&reg; is
                installed, you're ready for booking!
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
            As soon as you enable bookings, guests can start taking trips in
            your bike &horbar; and you can start earning money.
          </p>
        </div>
      </div>
    </div>
  </div>
  <ReferForm type="bike" />
</template>
<style scoped></style>
