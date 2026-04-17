<script setup lang="ts">
import {
  Award,
  BadgeCheck,
  HeartHandshake,
  Timer,
  Wallet,
  Users,
} from 'lucide-vue-next'
import ImageCursorTrail from '@/components/common/ImageCursorTrail.vue'
import { siteConfig } from '@/config/site'

const reasons = [
  {
    icon: Award,
    title: 'Teknisi Bersertifikat',
    description:
      'Semua teknisi kami lulus training resmi dan memahami seluruh merk AC populer.',
  },
  {
    icon: Timer,
    title: 'Respon Cepat',
    description:
      'Konfirmasi dalam 30 menit. Teknisi bisa datang di hari yang sama untuk area Jabodetabek.',
  },
  {
    icon: Wallet,
    title: 'Harga Transparan',
    description:
      'Harga disepakati di awal sebelum pekerjaan dimulai. No hidden cost, garansi pasti.',
  },
  {
    icon: BadgeCheck,
    title: 'Garansi Layanan',
    description:
      'Setiap layanan bergaransi 14-90 hari tergantung jenis pekerjaan. Tidak dingin? Kami datang lagi.',
  },
  {
    icon: HeartHandshake,
    title: 'Pelayanan Ramah',
    description:
      'Teknisi sopan, bersih, dan siap menjelaskan kondisi AC Anda dengan detail.',
  },
  {
    icon: Users,
    title: 'Dipercaya 15.000+ Klien',
    description:
      'Dari rumah pribadi, apartemen, hingga perkantoran besar di Jabodetabek.',
  },
]

const images = [
  'https://images.unsplash.com/photo-1631545308456-26eddac0b5e1?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1626178793926-22b28830aa30?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1585128792020-803d29415281?q=80&w=800&auto=format&fit=crop',
]
</script>

<template>
  <section class="section bg-slate-50">
    <div class="container">
      <div class="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <span class="eyebrow">Kenapa Pilih Kami</span>
          <h2 class="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl text-balance">
            Dipercaya ribuan pelanggan di Jabodetabek
          </h2>
          <p class="mt-3 max-w-lg text-slate-600">
            Kami bukan sekadar tukang AC. Kami mitra jangka panjang untuk
            kenyamanan Anda di rumah maupun kantor.
          </p>

          <dl class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <div
              v-for="stat in siteConfig.stats"
              :key="stat.label"
              class="card p-4"
            >
              <dt class="text-xs text-slate-500">{{ stat.label }}</dt>
              <dd class="mt-1 font-display text-2xl font-bold text-primary-700">
                {{ stat.value }}
              </dd>
            </div>
          </dl>
        </div>

        <!-- Interactive cursor trail showcase -->
        <div class="rounded-3xl border border-slate-200 bg-white p-2 shadow-soft">
          <ImageCursorTrail
            :items="images"
            :max-number-of-images="5"
            :distance="25"
            img-class="sm:w-40 w-28 sm:h-48 h-36"
            class="bg-gradient-to-br from-primary-50 via-white to-slate-50"
          >
            <article class="pointer-events-none relative z-20 text-center px-6">
              <p class="text-xs font-semibold uppercase tracking-wider text-primary-600">
                Sorot layar / gerakkan mouse
              </p>
              <h3 class="mt-2 font-display text-2xl font-bold text-slate-900 md:text-3xl">
                Lihat kerja kami beraksi
              </h3>
              <p class="mt-2 text-sm text-slate-600">
                Dokumentasi asli dari teknisi Sejuk di lapangan.
              </p>
            </article>
          </ImageCursorTrail>
        </div>
      </div>

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="r in reasons"
          :key="r.title"
          class="card p-6 transition-all hover:-translate-y-1 hover:shadow-card"
        >
          <div
            class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700"
          >
            <component :is="r.icon" :size="20" />
          </div>
          <h3 class="mt-4 font-display text-lg font-semibold text-slate-900">
            {{ r.title }}
          </h3>
          <p class="mt-2 text-sm text-slate-600">{{ r.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
