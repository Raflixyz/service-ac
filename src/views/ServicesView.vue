<script setup lang="ts">
import { Check } from 'lucide-vue-next'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import { services } from '@/data/services'
import { formatRupiah, waLink } from '@/config/site'
</script>

<template>
  <div>
    <!-- Page header -->
    <section class="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
      <div
        aria-hidden="true"
        class="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-50"
      ></div>
      <div class="container relative text-center">
        <span class="eyebrow">Layanan Kami</span>
        <h1 class="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl text-balance">
          Semua kebutuhan AC Anda, dalam satu atap
        </h1>
        <p class="mt-4 mx-auto max-w-2xl text-slate-600">
          Cuci, isi freon, pasang, bongkar, hingga perbaikan. Semua dikerjakan oleh
          teknisi bersertifikat dengan alat profesional.
        </p>
      </div>
    </section>

    <!-- Grid services -->
    <ServicesSection />

    <!-- Detail per service -->
    <section class="section bg-slate-50">
      <div class="container">
        <div class="mx-auto max-w-2xl text-center">
          <span class="eyebrow">Detail Layanan</span>
          <h2 class="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl text-balance">
            Apa yang Anda dapatkan
          </h2>
        </div>

        <div class="mt-12 space-y-8">
          <div
            v-for="(s, i) in services"
            :key="s.id"
            :class="[
              'grid items-center gap-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:grid-cols-2 md:p-10',
              i % 2 === 1 ? 'md:[&>div:first-child]:order-2' : '',
            ]"
          >
            <div>
              <div
                class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700"
              >
                <component :is="s.icon" :size="22" />
              </div>
              <h3 class="mt-4 font-display text-2xl font-bold text-slate-900">
                {{ s.title }}
              </h3>
              <p class="mt-2 text-slate-600">{{ s.description }}</p>

              <ul class="mt-5 grid gap-2 sm:grid-cols-2">
                <li
                  v-for="f in s.features"
                  :key="f"
                  class="flex items-start gap-2 text-sm text-slate-700"
                >
                  <span class="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                    <Check :size="12" :stroke-width="3" />
                  </span>
                  {{ f }}
                </li>
              </ul>

              <div class="mt-6 flex flex-wrap items-center gap-4">
                <div>
                  <p class="text-xs text-slate-500">{{ s.priceUnit }}</p>
                  <p class="font-display text-2xl font-bold text-primary-700">
                    {{ formatRupiah(s.priceFrom) }}
                  </p>
                </div>
                <a
                  :href="waLink(`Halo, saya ingin pesan layanan ${s.title}.`)"
                  target="_blank"
                  rel="noopener"
                  class="btn-primary"
                >
                  Pesan Sekarang
                </a>
              </div>
            </div>

            <div class="relative">
              <div class="aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  :src="`https://images.unsplash.com/${[
                    'photo-1631545308456-26eddac0b5e1',
                    'photo-1581094794329-c8112a89af12',
                    'photo-1621905251918-48416bd8575a',
                    'photo-1600607687939-ce8a6c25118c',
                    'photo-1626178793926-22b28830aa30',
                    'photo-1558618666-fcd25c85cd64',
                  ][i % 6]}?q=80&w=900&auto=format&fit=crop`"
                  :alt="s.title"
                  class="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FaqSection />
    <CtaSection />
  </div>
</template>
