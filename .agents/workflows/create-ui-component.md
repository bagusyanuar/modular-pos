---
description: Membuata komponen UI baru dengan pola CVA + Variant Separation di packages/ui
---

// turbo
1. **Analisis Nama**: Pastikan nama komponen menggunakan prefix `G` dan `PascalCase` (Contoh: `GButton`).
2. **Setup Folder**: Buat direktori baru di `packages/ui/src/components/[nama-komponen]`.
3. **Draft Varian**: Buat file `[nama-komponen-kecil].variants.ts`. Gunakan `cva` dari `class-variance-authority`.
4. **Draft Komponen**: Buat file `[NamaKomponen].tsx`. 
   - Wajib import varian dari file `.variants.ts`.
   - Gunakan utilitas `cn()` untuk penggabungan class.
   - Gunakan `React.forwardRef` untuk kompatibilitas tingkat lanjut.
5. **Update Registry**: Tambahkan komponen baru ke dalam `@[.antigravity/components.md]` di kategori yang sesuai dengan deskripsi singkat.
6. **Verifikasi**: Lakukan pengecekan apakah file sudah terbuat di lokasi yang benar dan tidak ada error TypeScript.
