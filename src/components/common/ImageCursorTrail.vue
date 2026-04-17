<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Props {
  items: string[]
  maxNumberOfImages?: number
  distance?: number
  imgClass?: string
  fadeAnimation?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  maxNumberOfImages: 5,
  distance: 20,
  imgClass: 'w-40 h-48',
  fadeAnimation: false,
})

const containerRef = ref<HTMLDivElement | null>(null)
const imgRefs = ref<Array<HTMLImageElement | null>>([])

let globalIndex = 0
let last = { x: 0, y: 0 }
let currentZ = 1

const setImgRef = (el: unknown, i: number) => {
  imgRefs.value[i] = el as HTMLImageElement | null
}

const activate = (image: HTMLImageElement, x: number, y: number) => {
  const rect = containerRef.value?.getBoundingClientRect()
  if (!rect) return
  image.style.left = `${x - rect.left}px`
  image.style.top = `${y - rect.top}px`
  if (currentZ > 40) currentZ = 1
  image.style.zIndex = String(currentZ++)
  image.dataset.status = 'active'
  if (props.fadeAnimation) {
    setTimeout(() => {
      image.dataset.status = 'inactive'
    }, 1500)
  }
  last = { x, y }
}

const deactivate = (image: HTMLImageElement) => {
  image.dataset.status = 'inactive'
}

const distanceFromLast = (x: number, y: number) =>
  Math.hypot(x - last.x, y - last.y)

const handleMove = (clientX: number, clientY: number) => {
  if (distanceFromLast(clientX, clientY) > window.innerWidth / props.distance) {
    const len = imgRefs.value.length
    if (len === 0) return
    const lead = imgRefs.value[globalIndex % len]
    const tailIdx = (globalIndex - props.maxNumberOfImages) % len
    const tail =
      imgRefs.value[tailIdx < 0 ? tailIdx + len : tailIdx] ?? null
    if (lead) activate(lead, clientX, clientY)
    if (tail) deactivate(tail)
    globalIndex++
  }
}

const onMouse = (e: MouseEvent) => handleMove(e.clientX, e.clientY)
const onTouch = (e: TouchEvent) => {
  if (e.touches[0]) handleMove(e.touches[0].clientX, e.touches[0].clientY)
}

onMounted(() => {
  imgRefs.value = imgRefs.value.slice(0, props.items.length)
})
</script>

<template>
  <section
    ref="containerRef"
    class="relative grid h-[420px] w-full place-content-center overflow-hidden rounded-2xl md:h-[520px]"
    @mousemove="onMouse"
    @touchmove="onTouch"
  >
    <img
      v-for="(item, index) in items"
      :key="index"
      :ref="(el) => setImgRef(el, index)"
      :src="item"
      :alt="`cursor-trail-${index}`"
      data-status="inactive"
      loading="lazy"
      :class="[
        'cursor-trail-img absolute rounded-2xl object-cover shadow-lg pointer-events-none',
        imgClass,
      ]"
    />
    <slot />
  </section>
</template>
