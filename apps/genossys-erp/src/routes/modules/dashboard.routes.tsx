import type { RouteObject } from 'react-router';
import MainLayout from '../../layouts/MainLayout';

export const dashboardRoutes: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/dashboard',
        async lazy() {
          const { default: Component } =
            await import('@genossys-erp/presentation/dashboard/pages/DashboardPage');
          return { Component };
        },
      },
    ],
  },
];
