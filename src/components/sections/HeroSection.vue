<script setup lang="ts">
import { Star, ShieldCheck, Clock, ChevronRight } from 'lucide-vue-next'
import { siteConfig, waLink } from '@/config/site'

const badges = [
  { icon: ShieldCheck, label: 'Teknisi Bersertifikat' },
  { icon: Clock, label: 'Respon < 1 Jam' },
  { icon: Star, label: 'Rating 4.9/5' },
]
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-b from-primary-50/60 via-white to-white pt-10 md:pt-16">
    <!-- Grid bg -->
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-60"
    ></div>

    <div class="container relative">
      <div class="grid items-center gap-12 py-12 md:py-20 lg:grid-cols-2">
        <!-- Left -->
        <div class="animate-fade-up">
          <div class="eyebrow">
            <span class="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Tersedia hari ini · Jakarta & sekitarnya
          </div>
          <h1
            class="mt-4 font-display text-4xl font-bold leading-tight text-slate-900 text-balance md:text-5xl lg:text-6xl"
          >
            Jasa Service AC
            <span class="text-primary-600">Cepat, Bersih</span>,
            dan Bergaransi.
          </h1>
          <p class="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
            Teknisi bersertifikat dengan pengalaman 10+ tahun siap menangani cuci AC,
            isi freon, bongkar pasang, hingga perbaikan AC rumah & kantor Anda. Harga
            transparan, tidak ada biaya tersembunyi.
          </p>

          <div class="mt-7 flex flex-wrap gap-3">
            <a :href="waLink()" target="_blank" rel="noopener" class="btn-primary">
              Pesan via WhatsApp
              <ChevronRight :size="18" />
            </a>
            <a href="#layanan" class="btn-secondary">Lihat Layanan</a>
          </div>

          <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div
              v-for="b in badges"
              :key="b.label"
              class="flex items-center gap-2 text-sm text-slate-700"
            >
              <component :is="b.icon" :size="18" class="text-primary-600" />
              {{ b.label }}
            </div>
          </div>
        </div>

        <!-- Right - stat card + image -->
        <div class="relative animate-fade-up">
          <div class="relative mx-auto max-w-md">
            <div class="relative rounded-3xl bg-white shadow-card border border-slate-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1631545308456-26eddac0b5e1?q=80&w=800&auto=format&fit=crop"
                alt="Teknisi sedang service AC"
                class="h-72 w-full object-cover md:h-80"
                loading="eager"
                fetchpriority="high"
              />
              <div class="p-5">
                <div class="flex items-center gap-3">
                  <div class="flex -space-x-2">
                    <img
                      v-for="(a, i) in [
                        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=100&auto=format&fit=crop',
                        'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=100&auto=format&fit=crop',
                      ]"
                      :key="i"
                      :src="a"
                      class="h-8 w-8 rounded-full border-2 border-white object-cover"
                      alt="pelanggan"
                    />
                  </div>
                  <div>
                    <div class="flex items-center gap-1 text-amber-500">
                      <Star v-for="n in 5" :key="n" :size="14" fill="currentColor" :stroke-width="0" />
                    </div>
                    <p class="text-xs text-slate-600">
                      <strong>1.200+</strong> pelanggan puas bulan ini
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Floating price card -->
            <div
              class="absolute -bottom-6 -left-6 hidden rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-card md:block"
            >
              <p class="text-xs text-slate-500">Cuci AC mulai</p>
              <p class="font-display text-xl font-bold text-primary-700">Rp 75.000</p>
            </div>
            <div
              class="absolute -top-4 -right-4 hidden rounded-2xl bg-primary-600 px-4 py-3 text-white shadow-card md:block animate-float"
            >
              <p class="text-xs opacity-80">Panggilan</p>
              <p class="font-display text-lg font-bold">{{ siteConfig.hours.split(' · ')[0] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
