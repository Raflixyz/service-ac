<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Star, Quote } from 'lucide-vue-next'
import { testimonials } from '@/data/testimonials'

const visibleItems = ref<Set<number>>(new Set())
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idx = Number((entry.target as HTMLElement).dataset.idx)
          setTimeout(() => visibleItems.value.add(idx), idx * 120)
          observer?.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )
  document.querySelectorAll('[data-testimonial]').forEach((el) => {
    observer?.observe(el)
  })
})

onUnmounted(() => observer?.disconnect())

const isVisible = (i: number) => visibleItems.value.has(i)
</script>

<template>
  <section class="section bg-white">
    <div class="container">
      <div class="mx-auto max-w-2xl text-center">
        <span class="eyebrow">Testimoni</span>
        <h2 class="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl text-balance">
          Dipercaya rumah, kantor, dan bisnis di Jabodetabek
        </h2>
        <p class="mt-3 text-slate-600">
          Dengarkan langsung cerita pelanggan kami tentang pengalaman service AC
          bersama Sejuk.
        </p>
      </div>

      <div class="mt-12 grid gap-4 lg:grid-cols-3">
        <!-- Column 1 -->
        <div class="flex flex-col gap-4">
          <article
            data-testimonial
            :data-idx="0"
            :class="[
              'relative flex-[7] min-h-[240px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white transition-all duration-700',
              isVisible(0) ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm',
            ]"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:40px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            ></div>
            <Quote :size="28" class="relative text-primary-400 opacity-80" />
            <div class="relative mt-auto flex h-full flex-col justify-end">
              <p class="text-sm leading-relaxed md:text-base">
                "{{ testimonials[0].message }}"
              </p>
              <div class="mt-5 flex items-center justify-between">
                <div>
                  <h3 class="font-display font-semibold">{{ testimonials[0].name }}</h3>
                  <p class="text-xs text-slate-400">{{ testimonials[0].role }}</p>
                </div>
                <img
                  :src="testimonials[0].avatar"
                  :alt="testimonials[0].name"
                  loading="lazy"
                  class="h-14 w-14 rounded-xl object-cover"
                />
              </div>
            </div>
          </article>

          <article
            data-testimonial
            :data-idx="1"
            :class="[
              'flex-[3] flex flex-col justify-between rounded-2xl border border-primary-600 bg-primary-600 p-6 text-white transition-all duration-700',
              isVisible(1) ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm',
            ]"
          >
            <p class="text-sm leading-relaxed">"{{ testimonials[1].message }}"</p>
            <div class="mt-4 flex items-center justify-between">
              <div>
                <h3 class="font-display font-semibold">{{ testimonials[1].name }}</h3>
                <p class="text-xs text-primary-100">{{ testimonials[1].role }}</p>
              </div>
              <img
                :src="testimonials[1].avatar"
                :alt="testimonials[1].name"
                loading="lazy"
                class="h-14 w-14 rounded-xl object-cover"
              />
            </div>
          </article>
        </div>

        <!-- Column 2 -->
        <div class="flex flex-col gap-4">
          <article
            v-for="i in [2, 3, 4]"
            :key="i"
            data-testimonial
            :data-idx="i"
            :class="[
              'flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-700',
              isVisible(i) ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm',
            ]"
          >
            <div class="flex items-center gap-1 text-amber-500">
              <Star v-for="n in 5" :key="n" :size="14" fill="currentColor" :stroke-width="0" />
            </div>
            <p class="mt-3 text-sm leading-relaxed text-slate-700">
              "{{ testimonials[i].message }}"
            </p>
            <div class="mt-4 flex items-center justify-between">
              <div>
                <h3 class="font-display font-semibold text-slate-900">
                  {{ testimonials[i].name }}
                </h3>
                <p class="text-xs text-slate-500">{{ testimonials[i].role }}</p>
              </div>
              <img
                :src="testimonials[i].avatar"
                :alt="testimonials[i].name"
                loading="lazy"
                class="h-12 w-12 rounded-xl object-cover"
              />
            </div>
          </article>
        </div>

        <!-- Column 3 -->
        <div class="flex flex-col gap-4">
          <article
            data-testimonial
            :data-idx="5"
            :class="[
              'flex-[3] flex flex-col justify-between rounded-2xl border border-primary-600 bg-primary-600 p-6 text-white transition-all duration-700',
              isVisible(5) ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm',
            ]"
          >
            <p class="text-sm leading-relaxed">"{{ testimonials[5].message }}"</p>
            <div class="mt-4 flex items-center justify-between">
              <div>
                <h3 class="font-display font-semibold">{{ testimonials[5].name }}</h3>
                <p class="text-xs text-primary-100">{{ testimonials[5].role }}</p>
              </div>
              <img
                :src="testimonials[5].avatar"
                :alt="testimonials[5].name"
                loading="lazy"
                class="h-14 w-14 rounded-xl object-cover"
              />
            </div>
          </article>

          <article
            data-testimonial
            :data-idx="6"
            :class="[
              'relative flex-[7] min-h-[240px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white transition-all duration-700',
              isVisible(6) ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-4 blur-sm',
            ]"
          >
            <div
              class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:40px_44px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
            ></div>
            <Quote :size="28" class="relative text-primary-400 opacity-80" />
            <div class="relative mt-auto flex h-full flex-col justify-end">
              <p class="text-sm leading-relaxed md:text-base">
                "{{ testimonials[6].message }}"
              </p>
              <div class="mt-5 flex items-center justify-between">
                <div>
                  <h3 class="font-display font-semibold">{{ testimonials[6].name }}</h3>
                  <p class="text-xs text-slate-400">{{ testimonials[6].role }}</p>
                </div>
                <img
                  :src="testimonials[6].avatar"
                  :alt="testimonials[6].name"
                  loading="lazy"
                  class="h-14 w-14 rounded-xl object-cover"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
