# Planning: State Management (Agnostic & Modular) 🧠

Dokumen ini merencanakan implementasi State Management di GenPOS agar fleksibel dan siap mendukung berbagai library (Zustand, Redux, dll) tanpa merusak integritas arsitektur "Pure Core".

## 1. Filosofi & Lokasi
State Management dianggap sebagai detail implementasi dari layer **Application/Infrastructure**.

- **Lokasi Utama**: **`packages/store`**
- **Sifat**: **Adapter-based**. Paket ini dirancang untuk bisa menampung berbagai engine state management secara berdampingan.

## 2. Struktur Folder Fleksibel
Kita mengelompokkan kode berdasarkan **Library Engine** untuk mengisolasi boilerplate dan konfigurasi masing-masing library.

```text
packages/store/
├── src/
│   ├── zustand/              <-- Implementasi berbasis Zustand
│   │   ├── auth/
│   │   │   ├── auth.store.ts
│   │   │   └── auth.selector.ts
│   │   └── index.ts          <-- Export semua zustand stores
│   │
│   ├── redux/                <-- Implementasi berbasis Redux (Future ready)
│   │   ├── auth/
│   │   │   ├── auth.slice.ts
│   │   │   └── auth.reducer.ts
│   │   ├── store.ts          <-- Global redux store setup
│   │   └── index.ts          <-- Export semua redux slices
│   │
│   └── index.ts              <-- Entry point utama (Export facade)
```

## 3. Keuntungan Struktur Ini
1.  **Co-existence**: Memungkinkan modul yang sama diimplementasikan di dua library berbeda tanpa konflik.
2.  **Explicit Import**: Memudahkan developer memilih engine yang sesuai (misal: `@genpos/store/zustand` untuk UI sederhana, `@genpos/store/redux` untuk kompleksitas tinggi).
3.  **Boilerplate Isolation**: Konfigurasi Redux (Provider, Store) tidak akan mengganggu kesederhanaan Zustand.

## 4. Aturan Dependensi (Dependency Rules)
1.  **Store ➡️ Core**: Diperbolehkan mengimpor Models/Interfaces dari `features/core`.
2.  **Core ➡️ Store**: **HARAM**. Core tidak boleh tahu ada library state management apapun.
3.  **App ➡️ Store**: Aplikasi utama akan menggabungkan keduanya pada level inisialisasi.

---

*Terakhir diupdate: 19 April 2026*
