<script setup lang="ts">
import ShowCase from "../components/ShowCase.vue";
import RentCar from "../components/RentCar.vue";
import RentBike from "../components/RentBike.vue";
import LearnMore from "../components/LearnMore.vue";
import Why from "../components/Why.vue";
import Testimonials from "../components/Testimonials.vue";
import Carousel from "../components/Carousel.vue";
import FAQ from "../components/FAQ.vue";
</script>

<template>
  <ShowCase />
  <RentCar />
  <RentBike />
  <LearnMore />
  <Why />
  <Testimonials />

  <div
    class="h-screen bg-[url(/bgworld.png)] bg-cover bg-center object-cover origin-center bg-no-repeat w-full"
  >
    <div class="capitalize text-center text-5xl font-semibold pt-50 mb-20">
      Local services we provide
    </div>

    <Carousel />
  </div>
  <FAQ />
</template>
<style scoped></style>
