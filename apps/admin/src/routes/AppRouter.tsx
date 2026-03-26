import { createBrowserRouter } from 'react-router-dom';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { LoginPage } = await import('@genpos/auth/pages');
      return { Component: LoginPage };
    },
  },
  {
    path: '/forgot-password',
    lazy: async () => {
      const { ForgotPasswordPage } = await import('@genpos/auth/pages');
      return { Component: ForgotPasswordPage };
    },
  },
]);

export default AppRouter;
