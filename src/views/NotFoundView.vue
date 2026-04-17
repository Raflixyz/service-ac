<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Home, ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <section class="flex min-h-[70vh] items-center justify-center py-16">
    <div class="container text-center">
      <p class="font-display text-7xl font-bold text-primary-600 md:text-9xl">404</p>
      <h1 class="mt-4 font-display text-2xl font-bold text-slate-900 md:text-4xl">
        Halaman tidak ditemukan
      </h1>
      <p class="mt-3 mx-auto max-w-md text-slate-600">
        Sepertinya halaman yang Anda cari sudah dipindahkan atau tidak tersedia.
      </p>
      <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
        <RouterLink to="/" class="btn-primary">
          <Home :size="16" />
          Kembali ke Beranda
        </RouterLink>
        <button @click="$router.back()" class="btn-secondary">
          <ArrowLeft :size="16" />
          Halaman Sebelumnya
        </button>
      </div>
    </div>
  </section>
</template>
