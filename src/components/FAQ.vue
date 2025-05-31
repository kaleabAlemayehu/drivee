<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
const questions: Ref<number[], number[]> = ref([1, 2, 3, 4, 5, 6]);
const tabs: Array<string> = [
  'general',
  'security',
  'booking',
  'payment',
  'others',
];
const router = useRouter();
const route = useRoute();
const activeTab = ref('booking');
watch(
  () => route.hash,
  (newHash) => {
    activeTab.value = newHash.replace('#faq-', '') || 'booking';
    console.log('activeTab', activeTab.value);
  },
);

const rhs = questions.value.slice(
  Math.ceil(questions.value.length / 2),
  questions.value.length,
);
const selectedIndex: Ref<number | null> = ref(null);
const handleTab = (tab: string): void => {
  activeTab.value = tab;
  router.replace({ hash: `#faq-${tab}` });
};
const handleToggle = (i: number) => {
  selectedIndex.value = selectedIndex.value == i ? null : i;
};
const lhs = questions.value.slice(0, Math.ceil(questions.value.length / 2));
</script>
<template>
  <div class="min-h-[calc(100vh-10rem)] w-full">
    <div class="text-7xl font-semibold text-center capitalize mt-40 mb-15">
      have a question
    </div>
    <div class="flex w-45/100 mx-auto justify-between text-[1.60rem]">
      <div
        v-for="(t, _) in tabs"
        :class="[
          'px-5 py-3 capitalize font-light text-gray-500 cursor-pointer select-none transition-colors duration-300',
          activeTab === t ? 'text-black! font-medium bg-gray-200' : '',
        ]"
        @click="handleTab(t)"
      >
        {{ t }}
      </div>
    </div>
    <div v-for="i in tabs" class="">
      <div
        v-if="activeTab == i"
        class="w-5/6 my-15 px-10 mx-auto grid grid-cols-2 gap-x-15"
      >
        <div class="left-size flex flex-col justify-start items-center">
          <div
            v-for="(l, i) in lhs"
            :key="l"
            class="min-w-full my-5 max-w-full flex flex-col self-start justify-between gap-y-3 border-[1px] rounded-md capitalize border-gray-300 py-5 px-8 text-xl font-normal cursor-pointer transition-[height] duration-800 ease-in-out"
            @click="handleToggle(l)"
          >
            <div class="flex justify-between items-center">
              <div class="capitalize">
                How do I find a car or a bike for a trip?
              </div>

              <Icon
                icon="lucide:chevron-down"
                :class="[
                  'inline dark:text-white text-2xl !transition-transform !ease-in-out !duration-300',
                  selectedIndex === l ? 'rotate-x-180' : 'rotate-x-0',
                ]"
              />
            </div>

            <div
              ref="dropdowns"
              :class="[
                'origin-top transition-transform duration-300 ease-in-out',
                selectedIndex === l
                  ? 'scale-y-100 opacity-100 h-auto'
                  : 'scale-y-0 opacity-0 h-0',
              ]"
            >
              <p class="py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores fuga repudiandae aspernatur ex ipsam. Nihil dolorum
                ratione laudantium consequatur, quaerat eos natus sint dolores
                rem ullam quam, magni veritatis dolor quidem consequuntur autem
                perspiciatis repudiandae ab adipisci repellat totam eius.
                Veritatis quidem perspiciatis adipisci sed ea aperiam
                perferendis, quas labore.
              </p>
            </div>
          </div>
        </div>
        <div class="right-size flex flex-col justify-start items-center">
          <div
            v-for="(r, i) in rhs"
            :key="r"
            class="min-w-full my-5 max-w-full flex flex-col self-start justify-between gap-y-3 border-[1px] rounded-md capitalize border-gray-300 py-5 px-8 text-xl font-normal cursor-pointer transition-[height] duration-800 ease-in-out"
            @click="handleToggle(r)"
          >
            <div class="flex justify-between items-center">
              <div class="capitalize">
                How do I find a car or a bike for a trip?
              </div>

              <Icon
                icon="lucide:chevron-down"
                :class="[
                  'inline dark:text-white text-2xl !transition-transform !ease-in-out !duration-300',
                  selectedIndex === r ? 'rotate-x-180' : 'rotate-x-0',
                ]"
              />
            </div>

            <div
              ref="dropdowns"
              :class="[
                'origin-top transition-transform duration-300 ease-in-out',
                selectedIndex === r
                  ? 'scale-y-100 opacity-100 h-auto'
                  : 'scale-y-0 opacity-0 h-0',
              ]"
            >
              <p class="py-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores fuga repudiandae aspernatur ex ipsam. Nihil dolorum
                ratione laudantium consequatur, quaerat eos natus sint dolores
                rem ullam quam, magni veritatis dolor quidem consequuntur autem
                perspiciatis repudiandae ab adipisci repellat totam eius.
                Veritatis quidem perspiciatis adipisci sed ea aperiam
                perferendis, quas labore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
