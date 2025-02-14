<script setup lang="ts">
import { ref, onMounted } from "vue"
import { Icon } from "@iconify/vue";
const wrapper = ref<HTMLElement | null>(null);
const pages: Array<string> = ["Hostings", "Contact Us", "Account"];
onMounted(() => {
	if (!wrapper.value) return

	window.addEventListener("scroll", (e) => {
		e.preventDefault()
		if (window.scrollY > 70) {
			wrapper.value?.classList.add("scrollOn")
		}
		else {
			wrapper.value?.classList.remove("scrollOn");
		}
		console.log(wrapper.value.classList)
	})

})
</script>
<template>
	<div ref="wrapper" class="w-full flex items-center z-100 bg-transparent py-2 fixed top-0 right-0 left-0 transition-all duration-300 ">
		<div class="grid grid-cols-3 justify-between items-center px-10 min-h-20 mx-auto min-w-5/6  ">
			<div class="text-2xl font-semibold">Drivee</div>
			<div class="flex items-center justify-between">
				<div class="text-base font-normal cursor-pointer" v-for="i in pages" :key="i">{{ i }} 
					<Icon icon="lucide:chevron-down" class="inline dark:text-white text-xl" />
				</div>
			</div>
			<div class="flex justify-end gap-x-6 text-lg">
				<div class=" rounded-md border-white border-[1px] outline-none ring-0 py-3 px-5 text-white bg-black cursor-pointer">Sign In</div>
				<div class=" rounded-md border-black border-[1px] outline-none ring-0 py-3 px-5 text-black bg-white cursor-pointer">Sign Up</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.scrollOn{
	background: #fff;
	color: #000;
	padding: @apply py-4;
}

</style>
