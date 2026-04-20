import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  role: string;
}

interface AuthState {
  accessToken: string | null;
  user: User | null;
  setAuth: (token: string, user: User) => void;
  clearAuth: () => void;
}

/**
 * Store Auth: Disimpan di memory (Zustand). 
 * Tidak di-persist ke localStorage supaya lebih aman.
 * Jika halaman di-refresh, accessToken akan hilang dan kita panggil Silent Refresh.
 */
export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  setAuth: (token: string, user: User) => set({ accessToken: token, user }),
  clearAuth: () => set({ accessToken: null, user: null }),
}));
