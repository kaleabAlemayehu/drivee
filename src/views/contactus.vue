<script setup lang="ts"></script>
<template>
  <div
    class="h-[calc(100vh-10rem)] w-full bg-[url(/contactus.jpeg)] bg-center bg-cover bg-no-repeat flex justify-center items-center"
  >
    <div
      class="bg-black/50 w-full h-full m-0 p-0 flex justify-center items-center"
    >
      <div class="flex flex-col justify-center items-center">
        <div
          class="text-6xl font-semibold text-white text-center capitalize mb-8"
        >
          Turn your Vehicle into extra money
        </div>
        <div class="text-white text-xl leading-9 w-50/100 text-center mb-9">
          Our peer-to-peer marketplace hepsl solve some of the most pressing
          challenges facing the world today, including environmental
          sustainability and acess to economic opportunity.
        </div>
      </div>
    </div>
  </div>
  <div class="w-full bg-[url(/bgworld.png)] bg-top bg-cover bg-no-repeat">
    <div class="w-5/6 px-10 mx-auto pt-24 pb-16">
      <div class="text-6xl font-bold mb-8 mt-10 capitalize text-center">
        Need Additional Information?
      </div>
      <div
        class="text-xl text-zinc-500 mb-10 capitalize w-1/2 leading-10 mx-auto text-center"
      >
        a mulitfaceted professional skilled in multiple fields of research,
        development as well as a learning specialist. over 3` years of
        experience.`
      </div>
      <div
        class="bg-white rounded-xl border-gray-300 border-[1px] w-4/10 mx-auto h-[40rem] py-12 px-20"
      >
        <div class="font-semibold text-2xl mb-2 capitalize">Get Started</div>
        <div class="text-base capitalize font-light">
          Submit the form to start
        </div>
        <div class="my-10 flex flex-col">
          <label
            for="email"
            class="font-semibold text-base capitalize block mb-2"
            >email</label
          >
          <input
            type="text"
            name="email"
            class="p-4 rounded-lg outline-none w-full ring-0 border-gray-200 bg-gray-100 border-[1px]"
            placeholder="yourname@email.com"
          />

          <div class="my-10">
            <label
              for="message"
              class="font-semibold text-base capitalize block mb-2"
              >Tell us about it</label
            >
            <textarea
              name="message"
              class="p-4 rounded-lg h-42 resize-none outline-none w-full ring-0 border-gray-200 bg-gray-100 border-[1px]"
            ></textarea>
          </div>
          <div
            class="bg-black cursor-pointer px-5 py-3 font-semibold text-white capitalize rounded-lg inline-block self-center"
          >
            send message
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
