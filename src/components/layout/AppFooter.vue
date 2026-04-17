<script setup lang="ts">
import { RouterLink } from 'vue-router'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Snowflake,
} from 'lucide-vue-next'
import { siteConfig } from '@/config/site'
import { services } from '@/data/services'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-24 bg-ink-900 text-slate-300">
    <div class="container py-14 md:py-20">
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 font-display font-bold text-xl text-white">
            <span
              class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white"
            >
              <Snowflake :size="20" :stroke-width="2.5" />
            </span>
            Sejuk<span class="text-primary-400">.</span>
          </div>
          <p class="mt-4 text-sm leading-relaxed text-slate-400">
            {{ siteConfig.description }}
          </p>
          <div class="mt-5 flex gap-3">
            <a
              :href="siteConfig.social.instagram"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-primary-600 hover:text-white transition-colors"
            >
              <Instagram :size="16" />
            </a>
            <a
              :href="siteConfig.social.facebook"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
              class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-primary-600 hover:text-white transition-colors"
            >
              <Facebook :size="16" />
            </a>
          </div>
        </div>

        <!-- Layanan -->
        <div>
          <h3 class="font-display font-semibold text-white mb-4">Layanan</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="s in services.slice(0, 6)" :key="s.id">
              <RouterLink
                to="/layanan"
                class="hover:text-primary-400 transition-colors"
              >
                {{ s.title }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Menu -->
        <div>
          <h3 class="font-display font-semibold text-white mb-4">Menu</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <RouterLink to="/" class="hover:text-primary-400 transition-colors">
                Beranda
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/layanan" class="hover:text-primary-400 transition-colors">
                Layanan
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/tentang" class="hover:text-primary-400 transition-colors">
                Tentang Kami
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/kontak" class="hover:text-primary-400 transition-colors">
                Kontak
              </RouterLink>
            </li>
          </ul>

          <h3 class="font-display font-semibold text-white mt-6 mb-3">Area Layanan</h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="area in siteConfig.areas"
              :key="area"
              class="rounded-md bg-slate-800 px-2 py-1 text-xs"
            >
              {{ area }}
            </span>
          </div>
        </div>

        <!-- Kontak -->
        <div>
          <h3 class="font-display font-semibold text-white mb-4">Hubungi Kami</h3>
          <ul class="space-y-3 text-sm">
            <li class="flex items-start gap-3">
              <Phone :size="16" class="mt-0.5 text-primary-400 shrink-0" />
              <a :href="`tel:${siteConfig.phoneRaw}`" class="hover:text-white">
                {{ siteConfig.phone }}
              </a>
            </li>
            <li class="flex items-start gap-3">
              <Mail :size="16" class="mt-0.5 text-primary-400 shrink-0" />
              <a :href="`mailto:${siteConfig.email}`" class="hover:text-white">
                {{ siteConfig.email }}
              </a>
            </li>
            <li class="flex items-start gap-3">
              <MapPin :size="16" class="mt-0.5 text-primary-400 shrink-0" />
              <span>{{ siteConfig.address }}</span>
            </li>
            <li class="flex items-start gap-3">
              <Clock :size="16" class="mt-0.5 text-primary-400 shrink-0" />
              <span>{{ siteConfig.hours }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-slate-800">
      <div
        class="container flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-400 sm:flex-row"
      >
        <p>&copy; {{ year }} {{ siteConfig.name }}. Hak cipta dilindungi.</p>
        <p>
          Dibuat dengan <span class="text-primary-400">Vue 3</span> &middot;
          Dioptimalkan untuk Vercel
        </p>
      </div>
    </div>
  </footer>
</template>
