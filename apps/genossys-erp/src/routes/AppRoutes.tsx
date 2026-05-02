import { createBrowserRouter, RouterProvider } from 'react-router';
import LoginPage from '@genossys-erp/presentation/auth/pages/LoginPage';
import NotFoundPage from '@genossys-erp/presentation/shared/pages/NotFoundPage';
import MainLayout from '../layouts/MainLayout';
import { dashboardRoutes } from './modules/dashboard.routes';
import { branchRoutes } from './modules/branch.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    element: <MainLayout />,
    children: [...dashboardRoutes, ...branchRoutes],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
