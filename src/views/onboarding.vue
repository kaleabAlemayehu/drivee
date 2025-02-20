<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="h-screen w-full flex w-hidden">
    <div
      class="bg-cover bg-[url(/signup.jpeg)] bg-center h-full object-none origin-center w-full bg-no-repeat m-0"
    >
      <div class="bg-black/70 h-full w-full py-15">
        <div
          class="w-3/5 text-white h-full flex justify-start items-center mx-auto flex-col select-none"
        >
          <div class="text-5xl font-semibold mb-4">Drivee</div>
          <div
            class="text-3xl text-gray-100 spacing tracking-wider font-semibold mb-12 capitalize"
          >
            follow the process
          </div>
          <div
            class="bg-neutral-800 text-white rounded-2xl w-90/100 h-full py-6 px-5"
          >
            <div class="text-4xl text-center font-bold my-4 capitalize">
              Easy Onboarding
            </div>
            <div class="flex flex-col">
              <div class="flex">
                <div class="flex flex-col my-3 items-center">
                  <div class="size-4 bg-white rounded-full mx-2"></div>
                  <div
                    class="w-1 p-0 m-0 -mt-1 h-30 bg-white rounded-full"
                  ></div>
                </div>
                <div class="w-4/5 px-8">
                  <div class="text-3xl font-normal capitalize mb-2">
                    Cash Payment
                  </div>
                  <div class="text-gray-100 text-sm">
                    you will provide information about your and your automobile
                    on the sign-up form. give your automoble a name. then move
                    on to the following aciton.
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="flex flex-col my-1 items-center mx-0">
                  <Icon
                    icon="mdi:account-convert"
                    class="text-3xl inline-block m-0 p-0"
                  />
                  <div
                    class="w-1 p-0 m-0 mt-1 h-30 bg-white rounded-full"
                  ></div>
                </div>
                <div class="w-5/6 px-8">
                  <div class="text-3xl font-normal capitalize mb-2">
                    Nessary all documests
                  </div>
                  <div class="text-gray-100 text-sm">
                    if you have multiple vehicles, use the car manager to creat
                    a profile for each one. Listing each car costs $100 for
                    initial setup and $20 per month &horbar; but you won't be
                    charged until your car is ready for bookings.
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="flex flex-col my-1 items-center mx-0">
                  <Icon
                    icon="mdi:file-document"
                    class="text-3xl inline-block m-0 p-0"
                  />
                  <div
                    class="w-1 p-0 m-0 mt-1 h-30 bg-white rounded-full"
                  ></div>
                </div>
                <div class="w-5/6 px-8">
                  <div class="text-3xl font-normal capitalize mb-2">
                    Contact with us
                  </div>
                  <div class="text-gray-100 text-sm">
                    It's very easy to get in touch with us. just use the contact
                    form or pay us a visit for a voffe at the office.
                    dynamically innovate competitive technology after an
                    expanded array of leadership.
                  </div>
                </div>
              </div>
              <div class="flex">
                <div class="flex flex-col my-0 items-center mx-0">
                  <div class="size-4 p-0 mx-2 bg-white rounded-full"></div>
                </div>
                <div class="w-5/6 px-8">
                  <div class="text-base font-normal uppercase mb-2">
                    near by office
                  </div>
                  <div class="text-gray-300! text-sm mb-1">
                    121 King St, Melbourne VIC 3000, Australia
                  </div>
                  <ul class="list-disc text-sm font-semibold ml-6">
                    <li class="">Phone: +61 2 8376 6284</li>
                    <li class="">Email: drivee@gmail.com</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-full bg-white w-full py-26">
      <div class="w-3/5 mx-auto">
        <div class="w-full flex flex-col py-4">
          <div class="w-full mb-2">
            <div class="font-semibold text-xl mb-3">
              Name <span class="text-red-500">*</span>
            </div>
            <input
              type="text"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full"
              placeholder="Enter Your Name"
            />
          </div>

          <div class="w-full my-2">
            <div class="font-semibold text-xl mb-3">
              Email <span class="text-red-500">*</span>
            </div>
            <input
              type="text"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full"
              placeholder="Enter Your Email"
            />
          </div>

          <div class="w-full my-2">
            <div class="font-semibold text-xl mb-3">Message</div>
            <textarea
              class="py-3 px-5 block outline-none h-46 ring-1 ring-gray-300 rounded-lg border-none w-full"
              placeholder="Enter Your Message"
            ></textarea>
          </div>

          <div class="w-full my-2">
            <!-- TODO: adding custom file input to match the design-->
            <div class="font-semibold text-xl mb-3">
              Driving Liciense File Attachment
              <span class="text-red-500">*</span>
            </div>
            <input
              type="file"
              class="py-3 px-5 block outline-none ring-1 ring-gray-300 rounded-lg border-none w-full"
            />
          </div>
          <div class="flex items-center justify-start mt-5 mb-3">
            <input
              type="checkbox"
              class="size-4 text-blue-600 bg-gray-100 border-gray-300 rounded-xl mr-4 cursor-pointer"
            />

            <div class="lable-agree inline-block">
              I agree to the
              <span class="capitalize underline cursor-pointer"
                >terms and privacy policy.</span
              >
            </div>
          </div>

          <div
            class="w-full font-semibold cursor-pointer my-8 py-5 px-8 text-center select-none bg-black rounded-lg text-white"
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
