export interface Testimonial {
  name: string
  role: string
  message: string
  avatar: string
  highlight?: boolean
}

export const testimonials: Testimonial[] = [
  {
    name: 'Budi Santoso',
    role: 'Pemilik Rumah, Jakarta Selatan',
    message:
      'Servicenya cepat dan rapi. Teknisinya ramah, jelasin kondisi AC secara detail. AC sekarang jadi dingin lagi seperti baru.',
    avatar:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop',
    highlight: true,
  },
  {
    name: 'Rina Wijaya',
    role: 'Manager Kantor, Jakarta Pusat',
    message:
      'Sudah 2 tahun pakai kontrak service berkala. Tim Sejuk selalu on time dan kerjaannya bersih.',
    avatar:
      'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Andi Pratama',
    role: 'Pemilik Cafe, Bekasi',
    message:
      'Panggil hari ini, datang hari ini juga. Harga sesuai kesepakatan, tidak ada biaya tambahan mengejutkan.',
    avatar:
      'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Dewi Lestari',
    role: 'Ibu Rumah Tangga, Depok',
    message:
      'Anak saya alergi debu, setelah cuci AC di sini kamar jadi lebih bersih. Recommended banget.',
    avatar:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Hendra Kurniawan',
    role: 'Pemilik Kos-kosan, Tangerang',
    message:
      'Saya service 12 AC sekaligus, semua dikerjakan 1 hari dan hasilnya memuaskan. Teknisinya sopan.',
    avatar:
      'https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=400&auto=format&fit=crop',
  },
  {
    name: 'Siti Nurhaliza',
    role: 'Karyawan Swasta, Bogor',
    message:
      'Isi freon dan cuci, AC langsung dingin lagi. Harga jelas di awal, tidak ada hidden cost.',
    avatar:
      'https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=400&auto=format&fit=crop',
    highlight: true,
  },
  {
    name: 'Rizky Ahmad',
    role: 'Freelancer, Jakarta Timur',
    message:
      'Booking via WhatsApp gampang, respon cepat. Teknisi datang sesuai janji. Puas dengan hasilnya.',
    avatar:
      'https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=400&auto=format&fit=crop',
  },
]
