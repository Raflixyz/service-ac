# Sejuk Service AC — Website Service Panel AC

Website profesional untuk jasa service AC (cuci, isi freon, bongkar pasang, perbaikan, dan kontrak berkala). Dibangun dengan **Vue 3 + TypeScript + Vite + Tailwind CSS** dan siap deploy ke **Vercel**.

## ✨ Fitur

- 🎨 **UI/UX bersih & profesional** — desain modern khas website jasa service, tidak terlihat seperti buatan AI generik
- 📱 **Fully responsive** — mobile first, breakpoint rapi untuk tablet & desktop
- 🚀 **Performa tinggi** — Vite build, code splitting otomatis, preload font, lazy-load gambar
- 🔍 **SEO ready** — meta tag lengkap, Open Graph, Twitter Card, JSON-LD (LocalBusiness), `robots.txt`, sitemap otomatis
- ♿ **Aksesibilitas** — semantic HTML, aria-label, focus states, keyboard friendly
- 🔐 **Security headers** — terkonfigurasi via `vercel.json`
- 💬 **Integrasi WhatsApp** — tombol float, form kontak otomatis kirim ke WhatsApp dengan pesan terformat
- 🎭 **Animasi halus** — fade-in on scroll, hover, page transitions, cursor-trail effect interaktif

## 🧱 Struktur Project

```
.
├── index.html              # Entry HTML + SEO meta + JSON-LD
├── package.json
├── vite.config.ts          # Vite + alias @/ + plugin sitemap
├── tailwind.config.js      # Theme custom (warna, font, animasi)
├── tsconfig.json
├── vercel.json             # SPA rewrites + security headers + cache
├── public/
│   ├── favicon.svg
│   └── robots.txt
└── src/
    ├── App.vue
    ├── main.ts
    ├── router/index.ts     # 4 route + 404, meta title/description
    ├── assets/main.css     # Tailwind + komponen (btn, card, section)
    ├── config/site.ts      # Data global: nama, kontak, WhatsApp helper
    ├── data/               # services.ts, testimonials.ts, faqs.ts
    ├── components/
    │   ├── layout/         # AppNavbar, AppFooter
    │   ├── common/         # WhatsAppFloat, ImageCursorTrail
    │   └── sections/       # Hero, Services, Why, HowItWorks, Testimonials, Faq, Cta
    └── views/              # Home, Services, About, Contact, NotFound
```

## 🚀 Menjalankan Lokal

**Prasyarat:** Node.js 18+ dan npm.

```bash
# 1. Install dependencies
npm install

# 2. Jalankan dev server (http://localhost:5173)
npm run dev

# 3. Build untuk produksi
npm run build

# 4. Preview hasil build
npm run preview
```

## ☁️ Deploy ke Vercel

### Opsi 1 — via Vercel CLI

```bash
npm i -g vercel
vercel
```

### Opsi 2 — via Dashboard Vercel

1. Push project ini ke GitHub/GitLab/Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new) → import repository.
3. Vercel akan mendeteksi Vite otomatis. Klik **Deploy**.

File `vercel.json` sudah menangani:
- **SPA rewrites** (semua route ke `index.html`)
- **Security headers** (X-Frame-Options, Referrer-Policy, dsb.)
- **Cache asset** 1 tahun (`immutable`)

## ✏️ Kustomisasi

### Ganti identitas bisnis

Cukup edit satu file: **`src/config/site.ts`**

```ts
export const siteConfig = {
  name: 'Nama Bisnis Anda',
  phone: '+62 812-XXXX-XXXX',
  phoneRaw: '6281234567890',     // untuk tel: dan wa.me
  whatsapp: '6281234567890',
  email: 'email@domain.com',
  address: 'Alamat lengkap',
  // ...
}
```

### Update daftar layanan & harga
Edit `src/data/services.ts`.

### Update testimoni
Edit `src/data/testimonials.ts`.

### Update FAQ
Edit `src/data/faqs.ts`.

### Update warna brand
Edit palet `primary` di `tailwind.config.js`.

### Update SEO global
Edit `index.html` — meta tag & JSON-LD LocalBusiness.

## 📊 SEO Checklist

Sudah siap out-of-the-box:

- ✅ Title + meta description dinamis per halaman
- ✅ Canonical URL
- ✅ Open Graph + Twitter Card
- ✅ JSON-LD `LocalBusiness` (Google friendly)
- ✅ `robots.txt` + `sitemap.xml` (auto-generate saat build)
- ✅ Semantic HTML + alt text + heading hierarchy
- ✅ Lighthouse friendly (LCP, CLS, font preload)

**Setelah deploy, checklist:**

1. Ganti URL `https://sejuk-service.vercel.app` di `index.html`, `vite.config.ts`, dan `public/robots.txt` dengan domain asli.
2. Daftarkan ke [Google Search Console](https://search.google.com/search-console) & submit sitemap.
3. Tambahkan `og-image.jpg` (1200×630) di folder `public/`.

## 🛠️ Tech Stack

| Tools               | Versi  |
| ------------------- | ------ |
| Vue                 | 3.4    |
| Vue Router          | 4.4    |
| TypeScript          | 5.5    |
| Vite                | 5.4    |
| Tailwind CSS        | 3.4    |
| Lucide Vue          | Latest |
| vite-plugin-sitemap | 0.7    |

## 📄 Lisensi

Project ini dibuat untuk keperluan klien. Gunakan, modifikasi, dan deploy sesuka Anda.

---

Made with 💙 — Siap pakai, tinggal deploy.
