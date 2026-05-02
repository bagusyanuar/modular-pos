import type { RouteObject } from 'react-router';

export const dashboardRoutes: RouteObject[] = [
  {
    path: '/dashboard',
    async lazy() {
      const { default: Component } =
        await import('@genossys-erp/presentation/dashboard/pages/DashboardPage');
      return { Component };
    },
  },
];
