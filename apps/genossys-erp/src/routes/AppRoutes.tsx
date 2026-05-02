import { createBrowserRouter, RouterProvider } from 'react-router';
import LoginPage from '@genossys-erp/presentation/auth/pages/LoginPage';
import NotFoundPage from '@genossys-erp/presentation/shared/pages/NotFoundPage';
import { dashboardRoutes } from './modules/dashboard.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  ...dashboardRoutes,
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
