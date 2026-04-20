import { createBrowserRouter, RouterProvider } from 'react-router';
import DashboardPage from '@genpos/presentation/modules/base/dashboard/pages/DashboardPage';

/**
 * Konfigurasi rute menggunakan Data Router (React Router v7).
 * 'basename' diambil dari environment variable VITE_ADMIN_PATH.
 */
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <DashboardPage />,
    },
    {
      path: '*',
      element: <div className="flex h-screen items-center justify-center bg-gray-50 text-2xl font-bold text-gray-500">404 - Not Found</div>,
    },
  ],
  {
    basename: import.meta.env.VITE_ADMIN_PATH || '/',
  }
);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
