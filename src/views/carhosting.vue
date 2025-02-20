<script setup lang="ts">
import { Icon } from "@iconify/vue";
import LearnMore from "../components/LearnMore.vue";
import GetStartedForm from "../components/GetStartedForm.vue";
import OnboardingSteps from "../components/OnboardingSteps.vue";
</script>
<template>
  <div
    class="h-[calc(100vh-10rem)] w-full bg-[url(/carhosting.png)] bg-center bg-cover bg-no-repeat flex justify-center items-center"
  >
    <div
      class="bg-black/50 w-full h-full m-0 p-0 flex justify-center items-center"
    >
      <div class="flex flex-col justify-center items-center">
        <div
          class="text-6xl font-semibold text-white text-center capitalize mb-9"
        >
          Turn your car into extra money
        </div>
        <div class="text-white text-lg w-7/10 text-center mb-9">
          When you list your car, you're earning money while helping others
          navigate your city. it's a win-win, and your next big opportunity.
        </div>
        <div
          class="bg-white px-6 py-3 font-bold text-black capitalize rounded-lg select-none inline cursor-pointer"
        >
          Share Your Car
        </div>
      </div>
    </div>
  </div>
  <LearnMore class="mb-36" />
  <div
    class="h-screen w-full bg-[url(/bgworld.png)] bg-center bg-no-repeat bg-cover py-16"
  >
    <div class="w-5/6 px-10 mx-auto flex justify-between">
      <GetStartedForm />
      <OnboardingSteps />
    </div>
  </div>
</template>
<style scoped></style>
