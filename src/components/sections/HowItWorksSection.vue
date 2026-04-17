<script setup lang="ts">
import { MessageSquare, CalendarCheck, Sparkles, Smile } from 'lucide-vue-next'

const steps = [
  {
    icon: MessageSquare,
    title: 'Pesan',
    description: 'Hubungi kami via WhatsApp, telepon, atau formulir. Ceritakan keluhan AC Anda.',
  },
  {
    icon: CalendarCheck,
    title: 'Atur Jadwal',
    description: 'Tim admin konfirmasi jadwal dalam 30 menit. Teknisi bisa datang hari yang sama.',
  },
  {
    icon: Sparkles,
    title: 'Pengerjaan',
    description: 'Teknisi datang tepat waktu, kerjakan dengan rapi, dan jelaskan hasilnya.',
  },
  {
    icon: Smile,
    title: 'AC Kembali Dingin',
    description: 'Bayar setelah pekerjaan selesai & garansi layanan berlaku otomatis.',
  },
]
</script>

<template>
  <section class="section bg-gradient-to-b from-white to-primary-50/40">
    <div class="container">
      <div class="mx-auto max-w-2xl text-center">
        <span class="eyebrow">Cara Pemesanan</span>
        <h2 class="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl text-balance">
          Empat langkah, AC Anda kembali prima
        </h2>
        <p class="mt-3 text-slate-600">
          Proses pemesanan dirancang sederhana agar Anda tidak perlu ribet.
        </p>
      </div>

      <ol class="relative mt-12 grid gap-6 md:grid-cols-4">
        <!-- connector line on desktop -->
        <div
          aria-hidden="true"
          class="absolute left-0 right-0 top-8 hidden h-0.5 bg-gradient-to-r from-transparent via-primary-300 to-transparent md:block"
        ></div>

        <li
          v-for="(step, i) in steps"
          :key="step.title"
          class="relative text-center"
        >
          <div class="relative mx-auto inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white border-2 border-primary-500 text-primary-600 shadow-card">
            <component :is="step.icon" :size="26" />
            <span
              class="absolute -right-2 -top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-600 text-xs font-bold text-white"
            >
              {{ i + 1 }}
            </span>
          </div>
          <h3 class="mt-5 font-display text-lg font-semibold text-slate-900">
            {{ step.title }}
          </h3>
          <p class="mt-2 text-sm text-slate-600">{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
