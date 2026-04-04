import { createBrowserRouter } from 'react-router-dom';
import { APP_PATHS } from './paths';

import AppLayout from '../layouts/AppLayout';

const AppRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: APP_PATHS.DASHBOARD,
        element: <div />, // Placeholder untuk sementara
      },
    ],
  },
]);

export default AppRouter;
