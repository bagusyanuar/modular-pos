import { createBrowserRouter, RouterProvider, redirect } from 'react-router';
import DashboardPage from '@genpos/presentation/modules/base/dashboard/pages/DashboardPage';
import { hasSession, exchangeToken } from '@genpos/utils';
import { useAuthStore } from '@genpos/store/zustand';

/**
 * Loader utama untuk menangani autentikasi dan handshake token.
 */
const rootLoader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');

  // 1. Jika ada 'code' di URL, lakukan Token Exchange
  if (code) {
    try {
      const { accessToken, user } = await exchangeToken(code);
      // Simpan accessToken ke Zustand store
      useAuthStore.getState().setAuth(accessToken, user);

      // Redirect ke path yang sama tanpa query param ?code
      return redirect('/');
    } catch (error) {
      console.error('Token Exchange Failed:', error);
      return redirect('/sso/');
    }
  }

  // 2. Cek apakah ada session (refresh_token di cookie)
  if (!hasSession()) {
    return redirect('/sso/');
  }

  return null;
};

/**
 * Konfigurasi rute menggunakan Data Router (React Router v7).
 */
const router = createBrowserRouter(
  [
    {
      path: '/',
      loader: rootLoader,
      element: <DashboardPage />,
    },
    {
      path: '*',
      element: (
        <div className="flex h-screen items-center justify-center bg-gray-50 text-2xl font-bold text-gray-500">
          404 - Not Found
        </div>
      ),
    },
  ],
  {
    basename:
      import.meta.env.VITE_ADMIN_PATH === '/'
        ? undefined
        : import.meta.env.VITE_ADMIN_PATH,
  }
);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
