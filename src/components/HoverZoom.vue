<script setup lang="ts">
import { ref, onMounted, type Ref } from "vue";
import { type CursorPosition } from "../types/index.ts";
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
const image: Ref<HTMLElement | null> = ref(null);

// Initialize zoom
const initZoom = () => {
  const img = image?.value as HTMLImageElement;
  const result: HTMLElement = document.querySelector<HTMLElement>(
    "#result",
  ) as HTMLElement;

  // Calculate the ratio between result DIV and lens
  cx.value = (result.offsetWidth ?? 0) / lensSize.value.width; // Lens width is 40px
  cy.value = (result.offsetHeight ?? 0) / lensSize.value.height; // Lens height is 40px

  // Set background properties for the result DIV
  resultStyle.value.backgroundImage = `url('${img?.src}')`;
  resultStyle.value.backgroundSize = `${img?.width * cx.value}px ${img?.height * cy.value}px`;
};

// Move lens based on cursor position
const moveLens = (e: MouseEvent) => {
  e.preventDefault();

  imageStyle.value.opacity = "0";
  showLens.value = true;
  const img = image.value as HTMLImageElement;
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

const mouseLeave = (e: MouseEvent) => {
  e.preventDefault();
  console.log(imageStyle.value.opacity);

  showLens.value = false;
  imageStyle.value.opacity = "1";
  console.log(imageStyle.value.opacity);
};

// Get cursor position relative to the image
const getCursorPos = (e: Event): CursorPosition => {
  const img = image.value as HTMLImageElement;
  const rect = img?.getBoundingClientRect();
  // Calculate the cursor's x and y coordinates, relative to the image
  const x =
    (e as MouseEvent).pageX.valueOf() -
    rect.left.valueOf() -
    window.pageXOffset.valueOf();
  const y =
    (e as MouseEvent).pageY.valueOf() -
    rect.top.valueOf() -
    window.pageYOffset.valueOf();
  return { x, y } as CursorPosition;
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
