import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  setToken: (token: string) => void;
  clearToken: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      setToken: (token: string) => set({ accessToken: token }),
      clearToken: () => set({ accessToken: null }),
    }),
    {
      name: 'genpos-auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
