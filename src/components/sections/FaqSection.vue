<script setup lang="ts">
import { ref } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
import { faqs } from '@/data/faqs'

const openIndex = ref<number | null>(0)
const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <section class="section bg-white">
    <div class="container">
      <div class="mx-auto max-w-2xl text-center">
        <span class="eyebrow">FAQ</span>
        <h2 class="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl text-balance">
          Pertanyaan yang sering diajukan
        </h2>
        <p class="mt-3 text-slate-600">
          Tidak menemukan jawaban? Hubungi kami langsung, kami siap bantu.
        </p>
      </div>

      <div class="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-soft">
        <div
          v-for="(f, i) in faqs"
          :key="i"
          class="overflow-hidden"
        >
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50 md:text-base"
            :aria-expanded="openIndex === i"
            :aria-controls="`faq-${i}`"
            @click="toggle(i)"
          >
            <span>{{ f.question }}</span>
            <ChevronDown
              :size="18"
              :class="[
                'shrink-0 text-primary-600 transition-transform duration-300',
                openIndex === i ? 'rotate-180' : '',
              ]"
            />
          </button>
          <div
            :id="`faq-${i}`"
            :class="[
              'grid transition-all duration-300 ease-out',
              openIndex === i
                ? 'grid-rows-[1fr] opacity-100'
                : 'grid-rows-[0fr] opacity-0',
            ]"
          >
            <div class="overflow-hidden">
              <p class="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                {{ f.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
