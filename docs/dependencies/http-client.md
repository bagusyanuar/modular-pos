# Documentation: HttpClient Service (@genpos/http) 🌐

Paket `@genpos/http` adalah wrapper di atas **Axios** yang menyediakan antarmuka terstandarisasi untuk komunikasi API di seluruh aplikasi GenPOS.

## 1. Filosofi Design
- **Vendor Agnostic**: Repositori tidak tahu kalau kita pakai Axios mendalam, memudahkan jika ingin ganti library di masa depan.
- **Strictly Type-Safe**: Tidak ada tipe `any`. Semua request/response menggunakan generics.
- **Dependency Injection**: Urusan token dan logout disuntikkan dari luar (Apps layer).

---

## 2. Inisialisasi (Infrastructure Layer)

Disarankan membuat instance singleton di level infrastruktur.

```typescript
// features/infrastructure/src/http.ts
import { createHttpClient } from '@genpos/http';

export const httpClient = createHttpClient({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  refreshPath: '/auth/refresh' // Endpoint untuk auto-silent refresh
});
```

---

## 3. Penggunaan di Repository (Constructor Injection)

Repositori harus menerima instance `HttpClient` lewat constructor agar mudah di-unit test.

```typescript
// features/infrastructure/src/modules/auth/auth.repository.ts
import { HttpClient } from '@genpos/http/client';
import { safeApiCall } from '@genpos/infrastructure/utils';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async login(form: LoginForm): Promise<LoginModel> {
    return safeApiCall(async () => {
      // Panggil metode API langsung (Delegators)
      const { data } = await this.httpClient.post<{ access_token: string }>(
        '/auth/login', 
        form
      );
      return { accessToken: data.access_token };
    });
  }
}
```

---

## 4. Konfigurasi Global (Application Entry Point)

Penyuntikan dependensi (Token/Logout) dilakukan di level aplikasi utama agar tidak terjadi *circular dependency*.

```typescript
// apps/web-pos/src/main.tsx
import { httpClient } from '@genpos/infrastructure/http';
import { useAuthStore } from '@genpos/store/zustand';

// Suntikkan pengambil token belanja dari Zustand
httpClient.setTokenGetter(() => useAuthStore.getState().accessToken);

// Suntikkan logic logout/clear session
httpClient.setOnUnauthorized(() => {
  useAuthStore.getState().clearToken();
  window.location.href = '/login';
});
```

---

## 5. API Reference (Direct Methods)

`HttpClient` menyediakan metode delegasi yang sama persis dengan Axios:

| Method | Signature | Deskripsi |
| :--- | :--- | :--- |
| `request<T>` | `(config: AxiosRequestConfig)` | Metode paling fleksibel (sama seperti `axios(config)`). |
| `get<T>` | `(url, config?)` | Melakukan HTTP GET request. |
| `post<T>` | `(url, data?, config?)` | Melakukan HTTP POST request. |
| `put<T>` | `(url, data?, config?)` | Melakukan HTTP PUT request. |
| `patch<T>` | `(url, data?, config?)` | Melakukan HTTP PATCH request. |
| `delete<T>` | `(url, config?)` | Melakukan HTTP DELETE request. |

### Fitur Otomatis
1.  **Silent Refresh**: Jika API membalas 401 dan `refreshPath` terpasang, client akan otomatis melakukan refresh token dan mengulangi request asli.
2.  **Request Queuing**: Request yang masuk saat proses refresh sedang berjalan akan di-antre otomatis sampai refresh selesai.
3.  **Error Conversion**: Melempar `HttpError` yang bisa diconvert menjadi domain exception menggunakan utilitas `handleApiError`.

---

*Terakhir diupdate: 19 April 2026*
