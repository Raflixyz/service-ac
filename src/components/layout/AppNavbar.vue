<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Menu, X, Phone, Snowflake } from 'lucide-vue-next'
import { siteConfig, waLink } from '@/config/site'

const route = useRoute()
const mobileOpen = ref(false)
const scrolled = ref(false)

const navItems = [
  { name: 'Beranda', path: '/' },
  { name: 'Layanan', path: '/layanan' },
  { name: 'Tentang', path: '/tentang' },
  { name: 'Kontak', path: '/kontak' },
]

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const isActive = computed(() => (path: string) => route.path === path)
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-40 w-full transition-all duration-300',
      scrolled
        ? 'bg-white/90 backdrop-blur-md shadow-soft border-b border-slate-200/60'
        : 'bg-transparent',
    ]"
  >
    <nav
      class="container flex h-16 items-center justify-between md:h-20"
      aria-label="Navigasi utama"
    >
      <RouterLink
        to="/"
        class="flex items-center gap-2 font-display font-bold text-lg md:text-xl text-slate-900"
        @click="mobileOpen = false"
      >
        <span
          class="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-600 text-white shadow-card"
        >
          <Snowflake :size="20" :stroke-width="2.5" />
        </span>
        <span>
          Sejuk<span class="text-primary-600">.</span>
        </span>
      </RouterLink>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="item in navItems" :key="item.path">
          <RouterLink
            :to="item.path"
            :class="[
              'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
              isActive(item.path)
                ? 'text-primary-700 bg-primary-50'
                : 'text-slate-700 hover:text-primary-700 hover:bg-slate-100',
            ]"
          >
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>

      <div class="hidden items-center gap-2 md:flex">
        <a
          :href="`tel:${siteConfig.phoneRaw}`"
          class="btn-ghost text-sm"
          aria-label="Telepon kami"
        >
          <Phone :size="16" />
          {{ siteConfig.phone }}
        </a>
        <a
          :href="waLink()"
          target="_blank"
          rel="noopener"
          class="btn-primary text-sm"
        >
          Pesan Sekarang
        </a>
      </div>

      <button
        class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
        @click="mobileOpen = !mobileOpen"
        :aria-expanded="mobileOpen"
        aria-label="Toggle menu"
      >
        <Menu v-if="!mobileOpen" :size="22" />
        <X v-else :size="22" />
      </button>
    </nav>

    <Transition name="slide">
      <div
        v-if="mobileOpen"
        class="md:hidden border-t border-slate-200 bg-white"
      >
        <div class="container py-4">
          <ul class="flex flex-col gap-1">
            <li v-for="item in navItems" :key="item.path">
              <RouterLink
                :to="item.path"
                :class="[
                  'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                  isActive(item.path)
                    ? 'text-primary-700 bg-primary-50'
                    : 'text-slate-700 hover:bg-slate-100',
                ]"
                @click="mobileOpen = false"
              >
                {{ item.name }}
              </RouterLink>
            </li>
          </ul>
          <div class="mt-4 flex flex-col gap-2">
            <a :href="`tel:${siteConfig.phoneRaw}`" class="btn-secondary w-full">
              <Phone :size="16" />
              {{ siteConfig.phone }}
            </a>
            <a
              :href="waLink()"
              target="_blank"
              rel="noopener"
              class="btn-primary w-full"
              @click="mobileOpen = false"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
  overflow: hidden;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
