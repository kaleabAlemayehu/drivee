<script setup lang="ts">
const props = defineProps(["type"]);
</script>
<template>
  <div class="w-full bg-white">
    <div class="w-5/6 px-10 py-25 flex flex-col items-center mx-auto">
      <div class="font-bold text-5xl capitalize text-center my-10">
        When You Refer A Friend
      </div>
      <div
        class="grid grid-cols-2 grid-rows-5 w-[67rem] gap-x-12 gap-y-20 py-6"
      >
        <div
          class="w-[30rem] col-span-1 row-span-2 h-92 rounded-xl bg-gray-100 border-gray-200 border-2 px-16 py-18"
        >
          <div class="text-5xl font-bold mb-6">+10%</div>
          <div class="text-3xl capitalize mb-6">
            When {{ props.type }} is live
          </div>
          <div class="text-gray-700 text-lg">
            You get a $200 bonus when your friend becomes a host and list their
            first {{ props.type }}.
          </div>
        </div>

        <div
          class="w-[30rem] h-92 col-span-1 row-span-2 rounded-xl bg-gray-100 border-gray-200 border-2 px-16 py-18"
        >
          <div class="text-5xl font-bold mb-6">+25%</div>
          <div class="text-3xl capitalize mb-6">Referred Host earngins</div>
          <div class="text-gray-700 text-lg">
            You'll also get the equivalent of 25% of your friend's earnings for
            their first 60 days after listing a {{ props.type }}.
          </div>
        </div>

        <div
          class="w-97/100 h-[35rem] col-span-2 row-span-3 rounded-xl bg-gray-100 border-gray-200 border-2 px-16 py-18 flex items-center flex-col"
        >
          <div class="text-5xl font-semibold capitalize mb-6">
            Refer A Friend
          </div>
          <div class="text-gray-500 capitalize text-lg">
            Input Your Information to get your referral link or submit a
            referee.
          </div>
          <div class="w-1/2 flex flex-col items-center py-12 mt-5">
            <input
              type="text"
              class="outline-none ring-0 rounded-lg border-gray-300 bg-white border-[.2px] px-4 py-3 w-full mb-4"
              placeholder="Phone Number"
            />

            <input
              type="email"
              class="outline-none ring-0 rounded-lg border-gray-300 bg-white border-[.2px] px-4 py-3 w-full mb-14"
              placeholder="Email"
            />
            <div
              class="bg-black rounded-lg text-white font-semibold px-6 cursor-pointer py-4 capitalize select-none inline-block mx-auto"
            >
              Refer a friend
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
