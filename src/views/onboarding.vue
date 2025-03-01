<script setup lang="ts">
import { onMounted } from "vue";
import { Icon } from "@iconify/vue";

const handleDrop = (e) => {
  console.log("droped", e);
  e.currentTarget.classList.remove("drag-over");
// NOTE: handle the file upload as you think
};
const handleDrag = (e) => {
  e.currentTarget.classList.add("drag-over");
};
const handleDragLeave = (e) => {
  e.currentTarget.classList.remove("drag-over");
};
</script>
<template>
  <div
    class="h-screen w-full bg-[url(/bgworld.png)] bg-no-repeat bg-cover bg-center"
  >
    <div class="bg-white/45 w-full h-full">
      <div class="w-4/5 mx-auto grid grid-cols-5 gap-x-8 py-12 px-8">
        <div class="col-span-3 grid grid-cols-3 grid-row-4 gap-5">
          <div
            class="rounded-xl border-[1px] border-gray-300 col-span-3 row-span-3 h-[calc(100vh-22rem)] bg-white flex justify-center items-center flex-col w-full"
            id="drop_area"
            @dragover.stop.prevent="handleDrag"
            @dragenter.stop.prevent="handleDrag"
            @dragleave.stop.prevent="handleDragLeave"
            @drop.stop.prevent="handleDrop"
          >
            <Icon icon="material-symbols:upload" class="text-3xl mb-2" />
            <div class="capitalize">upload your vehicle image</div>
            <input type="file" id="file-input" multiple hidden />
          </div>
          <div
            v-for="i in 3"
            :key="i"
            class="bg-white rounded-xl border-[1px] border-gray-100 h-[13rem]"
          ></div>
        </div>
        <div
          class="col-span-2 bg-white rounded-xl h-[calc(100vh-20rem)] px-12 py-16"
        >
          <div class="w-full mb-4">
            <label
              for="vehicles"
              class="font-semibold text-lg mb-2 inline-block"
              >How Many?</label
            >
            <input
              type="text"
              name="vehicles"
              class="p-4 outline-none ring-0 border-[1px] border-gray-400 rounded-xl w-full"
              placeholder="How Many Vehicle Do You Want To Share"
            />
          </div>
          <div class="w-full mb-4">
            <label
              for="vehicle_name"
              class="font-semibold text-lg mb-2 inline-block"
              >Vehicle Name</label
            >
            <input
              type="text"
              name="vehicle_name"
              class="p-4 outline-none ring-0 border-[1px] border-gray-400 rounded-xl w-full"
              placeholder="Vehicle Name"
            />
          </div>
          <div class="w-full mb-4 grid grid-cols-2 gap-x-4">
            <div class="w-full">
              <label
                for="vehicle_model"
                class="font-semibold text-lg mb-2 inline-block"
                >Vehicle Model</label
              >
              <input
                type="text"
                class="p-4 outline-none ring-0 border-[1px] border-gray-400 rounded-xl w-full"
                placeholder="Vehicle Model"
                name="vehicle_model"
              />
            </div>
            <div class="w-full">
              <label
                for="vehicle_number"
                class="font-semibold text-lg mb-2 inline-block"
                >Vehicle Number</label
              >
              <input
                type="text"
                class="p-4 outline-none ring-0 border-[1px] border-gray-400 rounded-xl w-full"
                placeholder="Vehicle Number"
                name="vehicle_number"
              />
            </div>
          </div>
          <div class="w-full mb-4 grid grid-cols-2 gap-x-4">
            <div class="w-full mb-4">
              <label
                for="sharing_price"
                class="font-semibold text-lg mb-2 inline-block"
                >Sharing Price</label
              >
              <input
                type="text"
                class="p-4 outline-none ring-0 border-[1px] border-gray-400 rounded-xl w-full"
                placeholder="Set Your Own Price"
                name="sharing_price"
              />
            </div>
            <div class="w-full mb-4">
              <label
                for="zip_code"
                class="font-semibold text-lg mb-2 inline-block"
                >Sharing Price</label
              >
              <input
                type="text"
                class="p-4 outline-none ring-0 border-[1px] border-gray-400 rounded-xl w-full"
                placeholder="Your ZIP Code"
                name="zip_code"
              />
            </div>
          </div>
          <div
            class="bg-black rounded-xl font-bold text-white capitalize w-full py-4 px-8 select-none text-center cursor-pointer"
          >
            Done
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
#drop_area.drag-over {
  background-color: #eee;
}
</style>
