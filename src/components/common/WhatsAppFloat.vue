<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MessageCircle } from 'lucide-vue-next'
import { waLink } from '@/config/site'

const visible = ref(false)

onMounted(() => {
  setTimeout(() => (visible.value = true), 600)
})
</script>

<template>
  <Transition name="float">
    <a
      v-if="visible"
      :href="waLink()"
      target="_blank"
      rel="noopener"
      aria-label="Chat via WhatsApp"
      class="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-all hover:bg-emerald-600 hover:scale-105 md:bottom-8 md:right-8"
    >
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40"></span>
      <MessageCircle :size="26" :stroke-width="2" class="relative" />
    </a>
  </Transition>
</template>

<style scoped>
.float-enter-active,
.float-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.float-enter-from,
.float-leave-to {
  opacity: 0;
  transform: scale(0.6) translateY(20px);
}
</style>
