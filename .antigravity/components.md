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

- **`GPopover`** (`packages/ui/src/components/popover/GPopover.tsx`)
  Komponen *floating menu* yang cerdas menggunakan Radix UI. Otomatis menentukan posisi terbaik di layar (collision detection). Cocok untuk menu profil, filter, atau informasi tambahan.

- **`GDialog`** (`packages/ui/src/components/dialog/GDialog.tsx`)
  Komponen modal/dialog dengan efek *glassmorphism* (`blur-md`) pada *backdrop*. Sangat fleksibel dengan dukungan sub-komponen `GDialogHeader`, `GDialogFooter`, `GDialogTitle`, dan `GDialogDescription`.

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

- **`GCalendar`** (`packages/ui/src/components/calendar/GCalendar.tsx`)
  Komponen kalender murni berbasis `react-day-picker`. Digunakan sebagai fondasi untuk DatePicker atau bisa digunakan stand-alone.

- **`GDatePicker` & `GDateRangePicker`** (`packages/ui/src/components/datepicker/index.ts`)
  Komponen pemilih tanggal (tunggal atau rentang) yang terintegrasi dengan Popover. Menggunakan `date-fns` untuk pemformatan tanggal yang standar.

- **`GTimePicker` & `GDateTimePicker`** (`packages/ui/src/components/datepicker/index.ts`)
  Komponen pemilih waktu mandiri atau gabungan bersama kalender. Menggunakan elemen native waktu yang di-*styling* sehingga sangat aksesibel dan mulus di akses via piranti seluler.

- **`GSwitch`** (`packages/ui/src/components/switch/GSwitch.tsx`)
  Tombol *toggle* geser yang halus. Mendukung label opsional di sisi kiri (`leftLabel`) dan kanan (`rightLabel`). Menggunakan warna brand oranye saat aktif.

- **`GFileUpload`** (`packages/ui/src/components/fileupload/GFileUpload.tsx`)
  Komponen untuk mengunggah satu atau banyak file sekaligus dengan fitur *drag & drop*. Mendukung validasi tipe file, ukuran maksimal, dan tampilan daftar file yang akan diunggah.

- **`GDataTable`** (`packages/ui/src/components/table/GDataTable.tsx`)
  Komponen tabel data tingkat lanjut berbasis **TanStack Table v8**. Mendukung fitur *sorting*, *pagination*, *row selection*, serta dilengkapi dengan state **Loading (Skeleton)** dan **Empty State** yang bisa dikustomisasi.

- **`GTabs`** (`packages/ui/src/components/tabs/GTabs.tsx`)
  Komponen navigasi tab dengan animasi *sliding indicator* yang halus menggunakan **Framer Motion**. Mendukung *Compound Component* pattern untuk fleksibilitas konten yang tinggi.

- **`GSkeleton`** (`packages/ui/src/components/skeleton/GSkeleton.tsx`)
  Komponen utilitas untuk membuat efek pemuatan (*loading*) dengan animasi *placeholder* berdenyut (pulse). Sangat fleksibel untuk berbagai bentuk layout.

- **`GBadge`** (`packages/ui/src/components/badge/GBadge.tsx`)
  Komponen label kecil (*pill*) untuk menampilkan status atau kategori. Tersedia dalam berbagai varian warna (success, error, warning, dsb) dengan dukungan icon.

---

> ✨ **Catatan:** Jika dalam desain terdapat elemen yang tidak ada di daftar ini, pertimbangkan untuk membuat komponen baru berawalan huruf **G** (GenPOS) di `packages/ui/src/components/` mengikuti skill CVA + `className` merger (`./utils/cn.ts`).
