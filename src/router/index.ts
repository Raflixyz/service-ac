import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Sejuk Service AC — Jasa Service AC Terpercaya',
      description:
        'Jasa service AC profesional: cuci AC, isi freon, bongkar pasang, dan perbaikan AC rumah & kantor.',
    },
  },
  {
    path: '/layanan',
    name: 'services',
    component: () => import('@/views/ServicesView.vue'),
    meta: {
      title: 'Layanan Kami — Sejuk Service AC',
      description:
        'Beragam layanan AC: cuci AC, isi freon, bongkar pasang, service berkala, dan perbaikan AC.',
    },
  },
  {
    path: '/tentang',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'Tentang Kami — Sejuk Service AC',
      description:
        'Mengenal lebih dekat Sejuk Service AC: teknisi bersertifikat, pengalaman 10+ tahun.',
    },
  },
  {
    path: '/kontak',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Kontak — Sejuk Service AC',
      description: 'Hubungi Sejuk Service AC untuk pemesanan dan konsultasi gratis.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: { title: 'Halaman Tidak Ditemukan — Sejuk Service AC' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const title = (to.meta.title as string) ?? 'Sejuk Service AC'
  const description = (to.meta.description as string) ?? ''
  document.title = title
  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    document.head.appendChild(metaDesc)
  }
  if (description) metaDesc.setAttribute('content', description)
})

export default router
