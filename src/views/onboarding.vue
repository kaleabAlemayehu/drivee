<script setup lang="ts">
import { ref, type Ref } from "vue";
import { Icon } from "@iconify/vue";
const fileInput: Ref<HTMLInputElement | null> = ref(null);
const files: Ref<FileList | null> = ref(null);

const previewImages = ref<string[]>([]);
const handleDrop = (e: DragEvent) => {
  (e?.currentTarget as HTMLElement)?.classList.remove("drag-over");
  // NOTE: handle the file upload as you think
  files.value = e.dataTransfer?.files as FileList;

  // Checking if there are any files
  if (files.value.length) {
    // Assigning the files to the hidden input from the first step
    fileInput.value!.files = files.value;
    // Processing the files for previews (next step)
    handleFiles(files.value);
  }
};
const handleFiles = (files: FileList) => {
  for (const file of files) {
    // Initializing the FileReader API and reading the file
    const reader = new FileReader();
    reader.readAsDataURL(file);

    // INFO: Once the file has been loaded, fire the processing
    reader.onloadend = function (e) {
      if (isValidFileType(file)) {
        if (e.target?.result !== null && e.target?.result !== undefined) {
          previewImages.value.push(e.target.result as string);
        }
      }
    };
  }
};

function isValidFileType(file: File) {
  const allowedTypes = ["image/jpeg", "image/png", "image/svg"];
  return allowedTypes.includes(file.type);
}

const handleDrag = (e: DragEvent) => {
  (e?.currentTarget as HTMLElement)?.classList?.add("drag-over");
};
const handleDragLeave = (e: DragEvent) => {
  (e?.currentTarget as HTMLElement)?.classList?.remove("drag-over");
};
</script>
<template>
  <div
    class="h-screen w-full bg-[url(/bgworld.png)] bg-no-repeat bg-cover bg-center"
  >
    <div class="bg-white/45 w-full h-full">
      <div class="w-4/5 mx-auto grid grid-cols-5 gap-x-8 py-12 px-8">
        <div class="col-span-3 grid grid-cols-1 grid-row-4 gap-y-5">
          <div
            class="rounded-xl border-[1.9px] border-dashed border-gray-300 row-span-3 h-[calc(100vh-22rem)] bg-white flex justify-center items-center flex-col w-full"
            id="drop_area"
            @dragover.stop.prevent.capture="handleDrag"
            @dragenter.stop.prevent.capture="handleDrag"
            @dragleave.stop.prevent.capture="handleDragLeave"
            @drop.stop.prevent.capture="handleDrop"
          >
            <Icon icon="material-symbols:upload" class="text-3xl mb-2" />
            <div class="capitalize">upload your vehicle image</div>
            <input type="file" ref="fileInput" multiple hidden />
          </div>
          <div
            class="col-span-3 flex justify-start w-full h-full overflow-x-auto preview"
          >
            <div
              v-for="(i, index) in previewImages"
              :key="index"
              class="flex-none bg-white rounded-xl border-[1px] border-gray-100 w-[17rem] h-[13rem] mr-3 mb-2"
            >
              <img :src="i" :alt="i" class="w-full h-full object-contain" />
            </div>
          </div>
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
  border-width: 2px;
}
.preview::-webkit-scrollbar-track {
  background: #ddd!; /* Change thumb color */
}
.preview::-webkit-scrollbar-thumb {
  background: #fff;
  border-radius: 5px; /* Rounded corners */
}
.preview::-webkit-scrollbar {
  width: 3px; /* Width for vertical scrollbar */
  height: 10px; /* Height for horizontal scrollbar */
}
</style>
