import { createBrowserRouter, RouterProvider } from 'react-router';
import LoginPage from '@genpos/presentation/modules/base/auth/pages/LoginPage';

/**
 * Konfigurasi rute menggunakan Data Router (React Router v7).
 * 'basename' diset ke '/sso' agar sinkron dengan proxy di Admin App.
 */
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <LoginPage />,
    },
    {
      path: '*',
      element: <div>Not Found</div>,
    },
  ],
  {
    basename: '/sso',
  }
);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
