import { createBrowserRouter, RouterProvider } from 'react-router';
import LoginPage from '@genossys-erp/presentation/auth/pages/LoginPage';
import NotFoundPage from '@genossys-erp/presentation/shared/pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
