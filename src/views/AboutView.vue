<script setup lang="ts">
import { Target, Eye, Heart } from 'lucide-vue-next'
import CtaSection from '@/components/sections/CtaSection.vue'
import { siteConfig } from '@/config/site'

const values = [
  {
    icon: Target,
    title: 'Misi Kami',
    description:
      'Memberikan layanan AC yang cepat, jujur, dan berkualitas kepada setiap rumah tangga dan bisnis di Indonesia.',
  },
  {
    icon: Eye,
    title: 'Visi Kami',
    description:
      'Menjadi mitra service AC #1 yang paling dipercaya di Jabodetabek pada tahun 2030.',
  },
  {
    icon: Heart,
    title: 'Nilai Kami',
    description:
      'Kejujuran, keahlian, dan kepuasan pelanggan adalah fondasi yang tidak bisa ditawar.',
  },
]

const team = [
  {
    name: 'Ahmad Fauzi',
    role: 'Founder & Kepala Teknisi',
    photo:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop',
  },
  {
    name: 'Dedi Sumarna',
    role: 'Supervisor Teknisi',
    photo:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop',
  },
  {
    name: 'Lina Marlina',
    role: 'Customer Service',
    photo:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop',
  },
  {
    name: 'Eko Prasetyo',
    role: 'Teknisi Senior',
    photo:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=500&auto=format&fit=crop',
  },
]
</script>

<template>
  <div>
    <!-- Header -->
    <section class="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white py-16 md:py-24">
      <div
        aria-hidden="true"
        class="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)] opacity-50"
      ></div>
      <div class="container relative text-center">
        <span class="eyebrow">Tentang Kami</span>
        <h1 class="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl text-balance">
          Ceritakan dulu, siapa {{ siteConfig.name }}
        </h1>
        <p class="mt-4 mx-auto max-w-2xl text-slate-600">
          Kami adalah tim teknisi AC profesional yang berdiri sejak 2014. Lebih
          dari 15.000 unit AC telah kami tangani dengan standar yang sama:
          jujur, rapi, dan bergaransi.
        </p>
      </div>
    </section>

    <!-- Story -->
    <section class="section bg-white">
      <div class="container grid items-center gap-10 lg:grid-cols-2">
        <div class="relative">
          <div class="aspect-[4/3] overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=900&auto=format&fit=crop"
              alt="Tim Sejuk Service sedang bekerja"
              class="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div class="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary-600 p-5 text-white shadow-card md:block">
            <p class="text-xs uppercase tracking-wider opacity-80">Berdiri sejak</p>
            <p class="font-display text-3xl font-bold">2014</p>
          </div>
        </div>
        <div>
          <span class="eyebrow">Perjalanan Kami</span>
          <h2 class="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl text-balance">
            Dari satu pick-up truck, kini melayani ribuan pelanggan
          </h2>
          <p class="mt-4 text-slate-600">
            {{ siteConfig.name }} bermula dari keresahan pendiri kami, Ahmad
            Fauzi, terhadap layanan AC yang sering mengecewakan: harga tidak
            transparan, teknisi tidak ramah, dan pengerjaan yang kurang rapi.
          </p>
          <p class="mt-3 text-slate-600">
            Dengan satu mobil dan tiga teknisi, kami mulai membangun standar
            baru: harga disepakati di awal, teknisi berpenampilan rapi,
            pengerjaan profesional, dan garansi yang jelas. Dari mulut ke mulut,
            kepercayaan tumbuh hingga kami dipercaya menangani 15.000+ unit AC
            di Jabodetabek.
          </p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="section bg-slate-50">
      <div class="container">
        <div class="mx-auto max-w-2xl text-center">
          <span class="eyebrow">Prinsip Kami</span>
          <h2 class="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl text-balance">
            Tiga hal yang kami pegang teguh
          </h2>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-3">
          <div
            v-for="v in values"
            :key="v.title"
            class="card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
          >
            <div class="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
              <component :is="v.icon" :size="22" />
            </div>
            <h3 class="mt-5 font-display text-xl font-semibold text-slate-900">
              {{ v.title }}
            </h3>
            <p class="mt-2 text-slate-600">{{ v.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section bg-white">
      <div class="container">
        <div class="mx-auto max-w-2xl text-center">
          <span class="eyebrow">Tim Kami</span>
          <h2 class="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl text-balance">
            Orang-orang di balik layar
          </h2>
          <p class="mt-3 text-slate-600">
            Tim kecil, tapi berdedikasi besar untuk kenyamanan Anda.
          </p>
        </div>

        <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="t in team"
            :key="t.name"
            class="group text-center"
          >
            <div class="aspect-square overflow-hidden rounded-2xl border border-slate-200">
              <img
                :src="t.photo"
                :alt="t.name"
                class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 class="mt-4 font-display text-lg font-semibold text-slate-900">
              {{ t.name }}
            </h3>
            <p class="text-sm text-primary-700">{{ t.role }}</p>
          </article>
        </div>
      </div>
    </section>

    <CtaSection />
  </div>
</template>
