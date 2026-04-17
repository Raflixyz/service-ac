import type { Component } from 'vue'
import {
  Droplets,
  Wind,
  Wrench,
  Package,
  ShieldCheck,
  Thermometer,
} from 'lucide-vue-next'

export interface Service {
  id: string
  icon: Component
  title: string
  description: string
  priceFrom: number
  priceUnit: string
  features: string[]
  popular?: boolean
}

export const services: Service[] = [
  {
    id: 'cuci-ac',
    icon: Droplets,
    title: 'Cuci AC',
    description:
      'Pembersihan menyeluruh indoor & outdoor unit menggunakan alat profesional untuk mengembalikan performa AC.',
    priceFrom: 75000,
    priceUnit: 'per unit',
    features: [
      'Cuci indoor & outdoor',
      'Bersih tanpa bongkar',
      'Anti-bakteri & jamur',
      'Hemat listrik sampai 20%',
    ],
    popular: true,
  },
  {
    id: 'isi-freon',
    icon: Thermometer,
    title: 'Isi Freon',
    description:
      'Pengisian freon R32, R410A, dan R22 dengan tekanan sesuai standar pabrik agar AC dingin maksimal.',
    priceFrom: 250000,
    priceUnit: 'mulai dari',
    features: [
      'Freon original',
      'Cek kebocoran gratis',
      'Vakum nitrogen',
      'Garansi 30 hari',
    ],
  },
  {
    id: 'bongkar-pasang',
    icon: Package,
    title: 'Bongkar Pasang AC',
    description:
      'Pindah AC ke lokasi baru? Kami bantu bongkar, packing, dan pasang kembali dengan aman.',
    priceFrom: 350000,
    priceUnit: 'per unit',
    features: [
      'Pipa baru tersedia',
      'Vakum nitrogen',
      'Pemasangan rapi',
      'Tes dingin sebelum selesai',
    ],
  },
  {
    id: 'pasang-baru',
    icon: Wrench,
    title: 'Pasang AC Baru',
    description:
      'Pemasangan AC baru lengkap dengan bracket, pipa, dan instalasi listrik oleh teknisi bersertifikat.',
    priceFrom: 300000,
    priceUnit: 'mulai dari',
    features: [
      'Bracket gratis',
      'Pipa kualitas premium',
      'Instalasi rapi',
      'Tes menyeluruh',
    ],
  },
  {
    id: 'perbaikan',
    icon: Wind,
    title: 'Perbaikan AC',
    description:
      'Menangani AC tidak dingin, bocor, bunyi, hingga modul kontrol bermasalah. Diagnosa gratis.',
    priceFrom: 150000,
    priceUnit: 'mulai dari',
    features: [
      'Diagnosa gratis',
      'Sparepart original',
      'Teknisi berpengalaman',
      'Garansi perbaikan',
    ],
  },
  {
    id: 'maintenance',
    icon: ShieldCheck,
    title: 'Kontrak Service Berkala',
    description:
      'Perawatan rutin 3 atau 6 bulan sekali agar AC awet, hemat listrik, dan udara selalu segar.',
    priceFrom: 600000,
    priceUnit: 'per tahun',
    features: [
      '4x kunjungan per tahun',
      'Pengecekan lengkap',
      'Prioritas panggilan',
      'Harga hemat',
    ],
  },
]
