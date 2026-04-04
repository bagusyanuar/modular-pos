---
description: Alur proses slicing UI dari gambar desain/mockup menggunakan komponen yang sudah ada
---

// turbo
1. **Analisis Gambar**: Identifikasi layout utama (Navbar, Sidebar, Content Area, Footer).
2. **Registry Mapping**: Wajib cek `@[.antigravity/components.md]`. Petakan elemen desain ke komponen `G` yang sudah ada (misal: Tombol -> `GButton`, Tabel -> `GDataTable`).
3. **Draft Skeleton**: Buat struktur dasar menggunakan Tailwind utility (Flexbox/Grid). Utamakan penggunaan **`orange-500`** untuk elemen branding.
4. **Implementasi Detil**: Masukkan komponen UI ke dalam layout. Tambahkan properti varian dan ukuran sesuai visual desain.
5. **Responsivitas**: Pastikan layout aman di mobile/desktop menggunakan prefix `sm:`, `md:`, `lg:` atau hook `useBreakpoint`.
6. **Refine Context**: Pastikan teks, placeholder, dan label mengikuti standar UX Copywriting yang berkelas.
