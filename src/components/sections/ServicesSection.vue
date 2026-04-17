<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'
import { services } from '@/data/services'
import { formatRupiah, waLink } from '@/config/site'
</script>

<template>
  <section id="layanan" class="section bg-white">
    <div class="container">
      <div class="mx-auto max-w-2xl text-center">
        <span class="eyebrow">Layanan Kami</span>
        <h2 class="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl text-balance">
          Solusi AC lengkap untuk rumah & kantor Anda
        </h2>
        <p class="mt-3 text-slate-600">
          Dari cuci rutin hingga perbaikan kompleks, tim kami siap membuat AC Anda
          kembali dingin dan hemat listrik.
        </p>
      </div>

      <div class="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="s in services"
          :key="s.id"
          :class="[
            'group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card',
            s.popular
              ? 'border-primary-200 bg-primary-50/40'
              : 'border-slate-200 bg-white',
          ]"
        >
          <span
            v-if="s.popular"
            class="absolute -top-2.5 right-5 rounded-full bg-primary-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
          >
            Populer
          </span>

          <div
            class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 transition-all group-hover:bg-primary-600 group-hover:text-white"
          >
            <component :is="s.icon" :size="22" />
          </div>

          <h3 class="mt-5 font-display text-xl font-semibold text-slate-900">
            {{ s.title }}
          </h3>
          <p class="mt-2 text-sm text-slate-600">
            {{ s.description }}
          </p>

          <ul class="mt-4 space-y-1.5 text-sm text-slate-700">
            <li
              v-for="f in s.features"
              :key="f"
              class="flex items-start gap-2"
            >
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500"></span>
              {{ f }}
            </li>
          </ul>

          <div class="mt-6 flex items-end justify-between pt-4 border-t border-slate-200">
            <div>
              <p class="text-xs text-slate-500">{{ s.priceUnit }}</p>
              <p class="font-display text-xl font-bold text-slate-900">
                {{ formatRupiah(s.priceFrom) }}
              </p>
            </div>
            <a
              :href="waLink(`Halo, saya ingin pesan layanan ${s.title}.`)"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-1 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
            >
              Pesan
              <ArrowRight :size="16" class="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
