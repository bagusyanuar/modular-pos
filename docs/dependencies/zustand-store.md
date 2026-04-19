# Planning: Zustand Store Management 🧠

Dokumen ini merencanakan implementasi State Management menggunakan Zustand dengan tetap menjaga integritas arsitektur "Pure Core".

## 1. Filosofi & Lokasi
State Management (Zustand) dianggap sebagai detail implementasi dari layer **Application/Infrastructure**, bukan bagian dari Domain Bisnis. 

- **Lokasi Utama**: **`packages/store`**
- **Alasan**: Agar state global (seperti Auth, User Profile, Settings) bisa digunakan bersama oleh berbagai aplikasi di dalam monorepo (misal: Web POS, Mobile App, dan Dashboard).

## 2. Aturan Dependensi (Dependency Rules)
Untuk menghindari *Circular Dependency* dan menjaga kesucian Core:
1.  **Store ➡️ Core**: `packages/store` diperbolehkan mengimpor Models/Interfaces dari `features/core`.
2.  **Core ➡️ Store**: **HARAM**. Core tidak boleh tahu ada Zustand di dunia ini.
3.  **App ➡️ Store & Core**: Aplikasi utama (Entry Point) akan menggabungkan keduanya.

## 3. Strategi Implementasi (Auth Store)

### 🔑 Token Management & Injection
Karena `packages/http` bersifat generic, kita akan menyuntikkan token dari store menggunakan pola *Callback Injection*:
- Di dalam `Main App`, kita panggil `setTokenGetter(() => useAuthStore.getState().token)`.
- Ini memastikan `http` bisa dapet token tanpa harus instal paket `zustand`.

### 💾 Persistence
- Menggunakan middleware `persist` dari Zustand.
- Token primer disimpan di **Cookie (HttpOnly)** untuk keamanan maksimal (XSS protection).
- Data non-sensitif (misal: nama User) bisa disimpan di LocalStorage atau tetap di memory.

## 4. Rencana Struktur Folder
```text
packages/store/
├── src/
│   ├── modules/
│   │   └── auth/
│   │       ├── auth.store.ts      <-- Definisi Store & Actions
│   │       └── auth.selector.ts   <-- (Opsional) Memoized selectors
│   └── index.ts                   <-- Barrel export
└── package.json
```

---

*Terakhir diupdate: 19 April 2026*
