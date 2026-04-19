# Modular Strategy - GenPOS Monorepo

Dokumen ini menjelaskan strategi teknis untuk mendukung sistem **Modular SaaS**, di mana fitur-fitur (modul) dapat diaktifkan atau dinonaktifkan berdasarkan langganan atau konfigurasi tenant.

## 1. Konsep Utama: Feature Registry

Setiap modul besar (misal: Inventory, POS, HRM, Finance) dikelola sebagai unit mandiri yang bersifat "Self-Describing".

### Feature Manifest
Setiap modul di layer `presentation` harus mengekspor sebuah **Manifest**.
- **`id`**: Identifier unik (e.g., `MOD_INVENTORY`).
- **`label`**: Nama modul untuk UI.
- **`icon`**: Ikon representatif.
- **`permission`**: Guard permission dasar.
- **`entryRoute`**: Path utama modul tersebut.

## 2. Orchestration di Shell App

Shell App bertindak sebagai pusat kendali untuk merangkai modul-modul tersebut.

### Module Registry
Shell App menyimpan daftar seluruh modul yang tersedia secara teknis di dalam kode.

### Tenant Configuration
Saat aplikasi dijalankan (setelah Login), Shell App mengambil konfigurasi tenant dari API:
```json
{
  "tenant_id": "T123",
  "enabled_modules": ["MOD_POS", "MOD_INVENTORY"]
}
```

## 3. Dynamic Routing & Security

Menggunakan **TanStack Router** untuk keamanan dan performa:

- **Dynamic Navigation**: Sidebar hanya merender item yang ID-nya ada dalam `enabled_modules`.
- **Navigation Guard**: Menggunakan properti `beforeLoad` pada route utama modul untuk memverifikasi hak akses tenant. Jika modul tidak aktif, user diarahkan ke halaman 403 atau Dashboard.
- **Lazy Loading**: Setiap modul dimuat secara asinkron menggunakan `.lazy()`. Kode untuk modul yang tidak aktif/tidak diakses tidak akan pernah diunduh oleh browser, menjaga ukuran bundle tetap optimal.

## 4. Build-time Tree Shaking (Advanced)

Untuk skenario di mana modul tertentu benar-benar ingin dihilangkan dari hasil file build (bukan hanya disembunyikan), kita menggunakan **Static Environmental Checks**.

Vite/Rollup dapat melakukan "Dead Code Elimination" jika sebuah import berada di balik kondisi boolean statis.

### Mekanisme:
1.  **Environment Variable**: Tentukan modul yang akan di-bundle via `.env`.
    `VITE_MODULE_INVENTORY_ENABLED=true`
2.  **Conditional Registration**:
    ```typescript
    const routeTree = rootRoute.addChildren([
      authRoute,
      // Jika variable env false, bundler akan membuang import modul ini sepenuhnya
      ...(import.meta.env.VITE_MODULE_INVENTORY_ENABLED === 'true' ? [inventoryRoute] : [])
    ]);
    ```
3.  **Result**: Jika diset `false`, chunk file untuk modul tersebut tidak akan pernah dibuat di folder `dist`.

## 5. State Management

Data modul yang aktif disimpan dalam global state (Zustand) agar dapat diakses oleh komponen UI mana pun untuk kebutuhan *conditional rendering*.

```typescript
// Contoh pemakaian di UI
const { isModuleEnabled } = useSystemSettings();

{isModuleEnabled('MOD_INVENTORY') && <InventoryWidget />}
```

## 6. Arsitektur Internal Modul (Clean/DDD)

Setiap modul di dalam `features/core` dibagi menjadi dua sub-layer utama untuk memisahkan **Aturan Bisnis** dan **Langkah Kerja**:

### 🏠 Layer: Domain (Aturan Bisnis)
Layer paling dalam yang berisi logika bisnis "suci" tanpa dependensi luar.
- **Models/Entities**: Objek bisnis utama (e.g., `Patient`, `Transaction`).
- **Value Objects (VO)**: Objek tanpa identitas yang membungkus data + validasi + behavior (e.g., `Price`, `Email`, `Quantity`). VO menjamin data "Always Valid" sejak lahir.
- **Repositories (Interfaces)**: Kontrak data yang diminta bisnis.
- **Domain Services**: Logika bisnis yang melibatkan banyak model sekaligus (e.g., `DoctorFeeCalculator`).

### ⚙️ Layer: Application (Langkah Kerja)
Layer yang mengorkestrasikan alur kerja aplikasi (Koki).
- **Use Cases**: Satu file fokus pada satu alur spesifik (e.g., `RegisterPatient.usecase.ts`).
- **DTOs / Inputs**: Kontrak data mentah yang masuk dari UI.
- **Ports**: Interface untuk sistem eksternal non-database (e.g., `PaymentGatewayPort`, `SatuSehatPort`).

## 7. Keuntungan Arsitektur
1. **Tree-Shakable**: Kode modul yang tidak dibeli tidak akan membebani user.
2. **Type Safe**: Semua routing dan permission dicek oleh TypeScript.
3. **Scalable**: Menambah modul baru hanya perlu mendaftarkannya ke Registry tanpa merusak modul lain.
4. **Maintainable**: Pemisahan tegas antara "Apa yang dilakukan" (Core) dan "Gimana cara ngelakuinnya" (Infra).

## 8. Otomatisasi: Scaffolding Core Module

Untuk menjaga konsistensi struktur folder di seluruh modul Core, gunakan script otomatisasi berikut:

```bash
pnpm create:core:module <nama-modul>
```

### Fitur Script Scaffolding:
- **Consistent Layout**: Otomatis membuat folder `application` (dtos, usecases, ports) dan `domain` (models, repositories, values).
- **Barrel Exports**: Otomatis membuat file `index.ts` di setiap level folder untuk mendukung *Shallow Import*.
- **Git Ready**: Menambahkan file `.gitkeep` di folder kosong agar struktur folder tetap terlacak di Git.
- **Safety First**: Script tidak akan menimpa (overwrite) file atau folder yang sudah ada jika lo sudah melakukan modifikasi manual.

---
*Terakhir diupdate: 20 April 2026*
