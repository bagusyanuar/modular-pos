import { createBrowserRouter } from 'react-router-dom';
import { APP_PATHS } from './paths';

const AppRouter = createBrowserRouter([
  {
    path: APP_PATHS.HOME,
    lazy: async () => {
      const { LoginPage } = await import('@genpos/auth/pages');
      return { Component: LoginPage };
    },
  },
  {
    path: APP_PATHS.FORGOT_PASSWORD,
    lazy: async () => {
      const { ForgotPasswordPage } = await import('@genpos/auth/pages');
      return { Component: ForgotPasswordPage };
    },
  },
]);

export default AppRouter;
