<script setup lang="ts">
import { ref, onMounted } from "vue"

const wrapper = ref<HTMLElement | null>(null);
const pages: Array<string> = ["Hostings", "Contact Us", "Account"];
onMounted(() => {
	if (!wrapper.value) return

	window.addEventListener("scroll", (e) => {
		e.preventDefault()
		if (window.scrollY > 70) {
			wrapper.value?.classList.add("onScroll")
		}
		else {
			wrapper.value?.classList.remove("onScroll");

		}
		console.log(wrapper.value.classList)
	})

})
</script>
<template>
	<div ref="wrapper" class="wrapper">
		<div class="content">
			<div class="logo">Drivee</div>
			<div class="interactions">

				<div class="navigations">
					<div class="pages" v-for="i in pages" :key="i">{{ i }}</div>
				</div>

				<div class="buttons">
					<div class="button">Sign In</div>
					<div class="button">Sign Up</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.wrapper {
	height: 6rem;
	height: 7rem;
	/* background: rgba(255, 255, 255, 0.2); */
	border-bottom: 0.1px solid var(--primary-gray);
	display: flex;
	align-items: center;
	backdrop-filter: blur(2px);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	transition: background-color 0.8s, height 0.8s;
}

.onScroll {
	background-color: var(--primary-white) !important;
	border: transparent;
	height: 5rem;
}


.onScroll .logo,
.onScroll .navigations,
.onScroll .button {
	color: var(--primary-black);
}

.interactions {
	display: flex;
	width: 75%;
	justify-content: space-around;
}

.content {
	width: 75%;
	margin-inline: auto;
	display: flex;
	justify-content: space-between;
	font-weight: 500;
}

.navigations {
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	min-width: 40%;
	cursor: pointer;
}

.logo {
	font-size: 24px;
	cursor: pointer;
	display: flex;
	align-items: center;
	text-align: center;
	color: var(--primary-black);
}

.buttons {
	display: flex;
	gap: 2rem;
}

.button {
	padding: 14px;
	border: 1px solid #000;
	border-radius: 8px;
	cursor: pointer;
	background-color: var(--primary-black);
	color: var(--primary-white) !important;
}
</style>
