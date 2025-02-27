<script setup lang="ts">
import { ref, onMounted } from "vue";
const lensSize = ref({
  width: 240,
  height: 240,
});

// Lens and result styles
const showLens = ref(false);

const lensStyle = ref({
  left: "0px",
  top: "0px",
});

const imageStyle = ref({
  opacity: "1",
});

const resultStyle = ref({
  backgroundImage: "",
  backgroundSize: "",
  backgroundPosition: "",
});

// Zoom ratios
const cx = ref(0);
const cy = ref(0);

// Refs
const image = ref(null);

// Initialize zoom
const initZoom = () => {
  const img = image.value;
  const result = document.querySelector("#result");

  // Calculate the ratio between result DIV and lens
  cx.value = result.offsetWidth / lensSize.value.width; // Lens width is 40px
  cy.value = result.offsetHeight / lensSize.value.height; // Lens height is 40px

  // Set background properties for the result DIV
  resultStyle.value.backgroundImage = `url('${img.src}')`;
  resultStyle.value.backgroundSize = `${img.width * cx.value}px ${img.height * cy.value}px`;
};

// Move lens based on cursor position
const moveLens = (e) => {
  e.preventDefault();

  imageStyle.value.opacity = "0";
  showLens.value = true;
  const img = image.value;
  const pos = getCursorPos(e);

  // Calculate the position of the lens
  let x = pos.x - lensSize.value.width / 2; // Half of lens width
  let y = pos.y - lensSize.value.height / 2; // Half of lens height

  // Prevent the lens from being positioned outside the image
  x = Math.max(0, Math.min(x, img.width - lensSize.value.width)); // Lens width is 40px
  y = Math.max(0, Math.min(y, img.height - lensSize.value.height)); // Lens height is 40px

  // Set the position of the lens
  lensStyle.value.left = `${x}px`;
  lensStyle.value.top = `${y}px`;

  // Display what the lens "sees"
  resultStyle.value.backgroundPosition = `-${x * cx.value}px -${y * cy.value}px`;
};

const mouseLeave = (e) => {
  e.preventDefault();
  console.log(imageStyle.value.opacity);

  showLens.value = false;
  imageStyle.value.opacity = "1";
  console.log(imageStyle.value.opacity);
};

// Get cursor position relative to the image
const getCursorPos = (e) => {
  const img = image.value;
  const rect = img.getBoundingClientRect();

  // Calculate the cursor's x and y coordinates, relative to the image
  const x = (e.pageX || e.touches[0].pageX) - rect.left - window.pageXOffset;
  const y = (e.pageY || e.touches[0].pageY) - rect.top - window.pageYOffset;

  return { x, y };
};

// Initialize zoom on mount
onMounted(() => {
  initZoom();
});
</script>
<template>
  <div class="w-full h-screen flex justify-center items-center relative">
    <div class="">
      <div class="relative inline-block">
        <img
          ref="image"
          src="https://picsum.photos/300/300"
          alt="Zoomable Image"
          @mousemove="moveLens"
          @touchmove="moveLens"
          @mouseleave="mouseLeave"
          :style="imageStyle"
          class="size-[30rem]"
        />
        <div
          v-if="showLens"
          class="absolute size-60 bg-white/20 border-gray-50 pointer-events-none"
          :style="lensStyle"
        ></div>
        <div
          class="border-2 border-gray-300 size-[30rem] absolute top-0 -z-10 bg-no-repeat"
          :style="resultStyle"
          id="result"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
