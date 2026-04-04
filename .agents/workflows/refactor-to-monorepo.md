---
description: Alur refactoring kode duplikat antar aplikasi ke packages/ui atau packages/shared
---

// turbo
1. **Identifikasi Duplikasi**: Cari kode/komponen serupa di folder `apps/` (misal: `apps/admin` dan `apps/auth`).
2. **Standardisasi**: Ubah kode agar mengikuti standar `@[.antigravity/rules.md]` (prefix `G`, PascalCase) dan `@[.antigravity/SKILL.md]` (CVA + Variant Separation).
3. **Migrasi**: Pindahkan logika/style ke `packages/ui` (untuk UI) atau `packages/shared` (untuk utilitas/konstanta/tipe).
4. **Update Import**: Ganti referensi import di aplikasi asli agar memanggil package baru (misal: `@genpos/ui/GButton`).
5. **Pembersihan**: Hapus file komponen lama di direktori `apps/` untuk menjaga kode tetap DRY.
6. **Verifikasi**: Jalankan `pnpm dev` di aplikasi terkait untuk memastikan tidak ada error import atau regresi visual.
