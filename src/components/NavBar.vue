<script setup lang="ts">
import { ref, onMounted } from "vue"

const wrapper = ref<HTMLElement | null>(null);
const pages: Array<string> = ["Hostings", "Contact Us", "Account"];
onMounted(() => {
	if (!wrapper.value) return

	window.addEventListener("scroll", (e) => {
		e.preventDefault()
		if (window.scrollY > 70) {
			wrapper.value?.classList.add("")
		}
		else {
			wrapper.value?.classList.remove("");

		}
		console.log(wrapper.value.classList)
	})

})
</script>
<template>
	<div ref="wrapper" class="w-full mx-auto">
		<div class="flex justify-between ">
			<div class="">Drivee</div>
			<div class="">

				<div class="">
					<div class="" v-for="i in pages" :key="i">{{ i }}</div>
				</div>

				<div class="">
					<div class="">Sign In</div>
					<div class="">Sign Up</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped></style>
