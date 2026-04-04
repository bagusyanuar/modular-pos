import { createBrowserRouter } from 'react-router-dom';
import { APP_PATHS } from './paths';

import AppLayout from '../layouts/AppLayout';

const AppRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: APP_PATHS.DASHBOARD,
        lazy: async () => {
          const { DashboardPage } = await import('@genpos/dashboard/pages');
          return { Component: DashboardPage };
        },
      },
    ],
  },
]);

export default AppRouter;
