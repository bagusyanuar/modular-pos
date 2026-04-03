import { createBrowserRouter } from 'react-router-dom';


import AppLayout from '../layouts/AppLayout';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/dashboard',
        element: <div />, // Placeholder untuk sementara
      },
    ],
  },
]);

export default AppRouter;
