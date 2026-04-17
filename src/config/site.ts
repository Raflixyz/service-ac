export const siteConfig = {
  name: 'Sejuk Service AC',
  shortName: 'Sejuk',
  tagline: 'Jasa Service AC Terpercaya',
  description:
    'Layanan service AC profesional: cuci, isi freon, bongkar pasang, dan perbaikan AC. Teknisi bersertifikat, harga transparan.',
  phone: '+62 812-3456-7890',
  phoneRaw: '6281234567890',
  whatsapp: '6281234567890',
  email: 'halo@sejuk-service.com',
  address: 'Jl. Melati Raya No. 12, Jakarta Selatan 12430',
  hours: 'Setiap hari · 07.00 - 21.00 WIB',
  areas: [
    'Jakarta',
    'Depok',
    'Tangerang',
    'Bekasi',
    'Bogor',
  ],
  stats: [
    { value: '10+', label: 'Tahun Pengalaman' },
    { value: '15K+', label: 'Unit AC Ditangani' },
    { value: '4.9/5', label: 'Rating Pelanggan' },
    { value: '24/7', label: 'Panggilan Darurat' },
  ],
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    tiktok: 'https://tiktok.com',
  },
}

export const waLink = (message = 'Halo, saya ingin pesan layanan service AC.') =>
  `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`

export const formatRupiah = (value: number): string =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value)
