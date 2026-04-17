<script setup lang="ts">
import { Phone, MessageCircle } from 'lucide-vue-next'
import { siteConfig, waLink } from '@/config/site'
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="relative overflow-hidden rounded-3xl bg-primary-700 px-6 py-12 text-white md:px-12 md:py-16">
        <!-- Decorations -->
        <div
          aria-hidden="true"
          class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-500 opacity-40 blur-3xl"
        ></div>
        <div
          aria-hidden="true"
          class="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-500 opacity-30 blur-3xl"
        ></div>
        <div
          aria-hidden="true"
          class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:48px_52px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_60%,transparent_100%)]"
        ></div>

        <div class="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <h2 class="font-display text-2xl font-bold md:text-4xl text-balance">
              Siap membuat AC Anda dingin kembali?
            </h2>
            <p class="mt-3 max-w-xl text-primary-100">
              Gratis konsultasi & diagnosa via WhatsApp. Teknisi bisa datang hari
              yang sama.
            </p>
          </div>
          <div class="flex flex-wrap gap-3">
            <a
              :href="waLink()"
              target="_blank"
              rel="noopener"
              class="btn bg-white text-primary-700 hover:bg-primary-50"
            >
              <MessageCircle :size="18" />
              Chat WhatsApp
            </a>
            <a
              :href="`tel:${siteConfig.phoneRaw}`"
              class="btn border border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              <Phone :size="18" />
              Telepon
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
