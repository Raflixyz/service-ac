<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
} from 'lucide-vue-next'
import { siteConfig, waLink } from '@/config/site'

const form = ref({
  name: '',
  phone: '',
  service: '',
  message: '',
})

const submitted = ref(false)

const serviceOptions = [
  'Cuci AC',
  'Isi Freon',
  'Bongkar Pasang AC',
  'Pasang AC Baru',
  'Perbaikan AC',
  'Kontrak Service Berkala',
  'Konsultasi',
]

const isValid = computed(
  () => form.value.name.trim() && form.value.phone.trim() && form.value.message.trim(),
)

const onSubmit = () => {
  if (!isValid.value) return
  const text = [
    `Halo ${siteConfig.shortName}, saya ingin memesan layanan.`,
    '',
    `Nama: ${form.value.name}`,
    `No. HP: ${form.value.phone}`,
    form.value.service ? `Layanan: ${form.value.service}` : '',
    `Pesan: ${form.value.message}`,
  ]
    .filter(Boolean)
    .join('\n')
  window.open(waLink(text), '_blank')
  submitted.value = true
  setTimeout(() => (submitted.value = false), 5000)
}

const contactItems = [
  {
    icon: Phone,
    label: 'Telepon',
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneRaw}`,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: siteConfig.phone,
    href: waLink(),
  },
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: 'Alamat',
    value: siteConfig.address,
    href: '#',
  },
  {
    icon: Clock,
    label: 'Jam Operasional',
    value: siteConfig.hours,
    href: '#',
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
        <span class="eyebrow">Kontak Kami</span>
        <h1 class="mt-4 font-display text-4xl font-bold text-slate-900 md:text-5xl text-balance">
          Kami siap membantu Anda
        </h1>
        <p class="mt-4 mx-auto max-w-2xl text-slate-600">
          Punya pertanyaan atau ingin memesan layanan? Hubungi kami melalui
          channel berikut atau isi formulir di bawah.
        </p>
      </div>
    </section>

    <!-- Contact grid + form -->
    <section class="section bg-white">
      <div class="container grid gap-10 lg:grid-cols-5">
        <!-- Info -->
        <div class="space-y-4 lg:col-span-2">
          <a
            v-for="c in contactItems"
            :key="c.label"
            :href="c.href"
            :target="c.href.startsWith('http') ? '_blank' : undefined"
            rel="noopener"
            class="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card"
          >
            <div class="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
              <component :is="c.icon" :size="20" />
            </div>
            <div>
              <p class="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {{ c.label }}
              </p>
              <p class="mt-0.5 font-medium text-slate-900">{{ c.value }}</p>
            </div>
          </a>
        </div>

        <!-- Form -->
        <div class="lg:col-span-3">
          <div class="card p-6 md:p-8">
            <h2 class="font-display text-2xl font-bold text-slate-900">
              Kirim pesan
            </h2>
            <p class="mt-1 text-sm text-slate-600">
              Isi formulir berikut dan kami akan menghubungi Anda via WhatsApp.
            </p>

            <form class="mt-6 grid gap-4" @submit.prevent="onSubmit">
              <div class="grid gap-4 sm:grid-cols-2">
                <div>
                  <label for="name" class="block text-sm font-medium text-slate-700 mb-1.5">
                    Nama Lengkap <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Nama Anda"
                    class="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                </div>
                <div>
                  <label for="phone" class="block text-sm font-medium text-slate-700 mb-1.5">
                    No. HP / WhatsApp <span class="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    required
                    placeholder="08xxxxxxxxxx"
                    class="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                  />
                </div>
              </div>

              <div>
                <label for="service" class="block text-sm font-medium text-slate-700 mb-1.5">
                  Layanan yang diinginkan
                </label>
                <select
                  id="service"
                  v-model="form.service"
                  class="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                >
                  <option value="">Pilih layanan (opsional)</option>
                  <option v-for="o in serviceOptions" :key="o" :value="o">
                    {{ o }}
                  </option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-slate-700 mb-1.5">
                  Pesan / Keluhan <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  placeholder="Ceritakan kondisi AC Anda, jumlah unit, alamat, dll."
                  class="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
                ></textarea>
              </div>

              <div class="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="submit"
                  class="btn-primary"
                  :disabled="!isValid"
                >
                  Kirim via WhatsApp
                  <Send :size="16" />
                </button>
                <p v-if="submitted" class="text-sm text-emerald-600">
                  ✓ Membuka WhatsApp...
                </p>
              </div>
              <p class="text-xs text-slate-500">
                Dengan mengirim, Anda akan diarahkan ke WhatsApp kami dengan
                pesan otomatis berisi data di atas.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Area layanan -->
    <section class="section bg-slate-50">
      <div class="container">
        <div class="mx-auto max-w-2xl text-center">
          <span class="eyebrow">Area Layanan</span>
          <h2 class="mt-4 font-display text-3xl font-bold text-slate-900 md:text-4xl text-balance">
            Wilayah yang kami layani
          </h2>
        </div>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <span
            v-for="area in siteConfig.areas"
            :key="area"
            class="rounded-full border border-primary-200 bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700"
          >
            📍 {{ area }}
          </span>
        </div>
      </div>
    </section>
  </div>
</template>
