# GenPOS Architecture Rules 🤖

Dokumen ini mendefinisikan aturan main dalam pengembangan Monorepo GenPOS untuk menjaga kode tetap bersih, modular, dan memiliki skalabilitas tinggi.

## 1. Aturan Import (Import Styling)

Kami membagi aturan impor menjadi dua kategori utama untuk menjaga keterbacaan dan mempermudah refactoring:

### 🏠 Sibling Imports (Internal Modul)
Gunakan **Relative Path** jika file yang diimpor berada dalam satu folder yang sama atau sub-folder di dalam modul fungsional yang sama.
- ✅ `import { authMapper } from './auth.mapper'`
- ✅ `import { authSchema } from './schemas/auth.schema'`

### 🌍 Cross-Module & Global Imports
Wajib gunakan **Package Alias** jika mengambil file dari luar folder modul saat ini atau dari paket lain. Ini mencegah "hujan titik" (`../../../../`) yang rapuh saat folder dipindahkan.
- ✅ `import { safeApiCall } from '@genpos/infrastructure/utils'`
- ✅ `import { AppError } from '@genpos/core/utils'`
- ❌ `import { safeApiCall } from '../../utils'`

---

## 2. Arsitektur & Dependency Flow

Kami mengikuti prinsip **Hexagonal/Clean Architecture** yang dimodifikasi untuk kebutuhan Frontend:

### 💠 Pure Core (Domain Layer)
Folder `features/core` adalah jantung dari aplikasi dan harus **benar-benar suci (Pure)**:
- **Haram** mengimpor library eksternal (Axios, Zustand, dll).
- **Haram** mengimpor dari layer luar (Infrastructure, UI).
- Hanya berisi Interface, Domain Models, dan Murni Bisnis Logik.

### 🌉 Infrastructure Layer
Bertindak sebagai jembatan antara Core dan dunia luar (API/Storage):
- Bergantung pada `core` (untuk ambil interface) dan `packages/http` (untuk eksekusi).
- Tugas utamanya adalah melakukan **Data & Error Mapping**.

---

## 3. Penanganan Error (Double Mapping Pattern)

Untuk menjaga Core tetap independen dari detail teknis HTTP:

1.  **Technical Level**: Paket `@genpos/http` melempar `HttpError` (teknis).
2.  **Infrastructure Level**: Repositori menangkap `HttpError` dan mengonversi menjadi Domain Exception (`AppError`, `ValidationError`) yang didefinisikan di Core.
3.  Gunakan utilitas **`safeApiCall`** di setiap implementasi repositori untuk standarisasi penanganan error.

---

*Terakhir diupdate: 19 April 2026*
