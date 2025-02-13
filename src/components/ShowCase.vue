<script setup lang="ts">
const buttons: Array<string> = ["Rent Car", "Rent Bike"]
</script>
<template>
	<div class="">
		<div class="">
			<div class="">
				<div class="">
					Unlock Endless Driving With Drivee
				</div>

				<div class="">
					To contribute to positive change and achieve our sustainability goals with many
					extraordinary
				</div>
				<div class="">
					<div class="" v-for="b in buttons" :key="b"> {{ b }}</div>
				</div>
			</div>
			<div class="">
				<div class="">
					Unlock Endless Driving With Drivee
				</div>

				<div class="">
					To contribute to positive change and achieve our sustainability goals with many
					extraordinary
				</div>
				<div class="">
					<div class="" v-for="b in buttons" :key="b"> {{ b }}</div>
				</div>

			</div>

		</div>
	</div>
</template>
<style scoped></style>
