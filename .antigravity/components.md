# 📚 Reusable Components Registry

Daftar komponen yang saat ini tersedia di `packages/ui` dan **WAJIB** digunakan saat melakukan integrasi atau *slicing* UI untuk menghindari duplikasi kode.

> [!IMPORTANT]
> **🎨 Design System Reminder**: Base color proyek ini adalah **`orange-500`**. Selalu gunakan warna ini untuk *background* utama, elemen dekoratif, dan *primary action* jika tidak ditentukan lain dalam desain *mockup*.

## 🔠 Typography
- **`GTypography`** (`packages/ui/src/components/typography/GTypography.tsx`)
  Komponen untuk mengatur standarisasi teks yang merender `h1`-`h6`, `p`, `small`, dll secara semantik. Mendukung pengaturan `weigh`, `align`, dan warna `color` (termasuk *brand primary*).

## 🔘 Action Components
- **`GButton`** (`packages/ui/src/components/button/GButton.tsx`)
  Tombol serbaguna dengan berbagai variant (primary, destructive, dll). Mendukung *loading state* terintegrasi dan *Prefix/Suffix Icons*.

- **`GToast`** (`packages/ui/src/components/toast/GToast.tsx`)
  Sistem notifikasi/toast berbasis `sonner` dengan integrasi ikon `react-icons/lu`. Render `GToast` di root aplikasi dan gunakan fungsi `toast()` untuk memicu pesan. Mendukung *styling* otomatis untuk tipe `success` (hijau), `error` (merah), `warning` (amber), dan `info` (biru).

## 📝 Form & Input Components
- **`GTextField`** (`packages/ui/src/components/textfield/GTextField.tsx`)
  Input text standar, dilengkapi *state error*, *disabled*, serta opsi icon.

- **`GPasswordfield`** (`packages/ui/src/components/passwordfield/GPasswordfield.tsx`)
  Input spesifik untuk password yang sudah terpasang tombol "Toggle Visibility" (mata buka/tutup).

- **`GCheckbox`** (`packages/ui/src/components/checkbox/GCheckbox.tsx`)
  Kotak centang tunggal / *checkbox*. Custom styling menggunakan Tailwind v4.

- **`GRadio`** (`packages/ui/src/components/radio/GRadio.tsx`)
  Tombol opsi (*radio button*) dengan warna brand oranye dan opsi *disabled / error state*. Bisa dikelompokkan untuk beberapa pilihan.

- **`GSelect`** (`packages/ui/src/components/select/GSelect.tsx`)
  Dropdown *select* untuk nilai tunggal. *Wrapper* cerdas atas library `react-select`.

- **`GMultiSelect`** (`packages/ui/src/components/select/GMultiSelect.tsx`)
  Dropdown *select* yang memungkinkan pemilihan opsi lebih dari satu nilai sekaligus.

---

> ✨ **Catatan:** Jika dalam desain terdapat elemen yang tidak ada di daftar ini, pertimbangkan untuk membuat komponen baru berawalan huruf **G** (GenPOS) di `packages/ui/src/components/` mengikuti skill CVA + `className` merger (`./utils/cn.ts`).
