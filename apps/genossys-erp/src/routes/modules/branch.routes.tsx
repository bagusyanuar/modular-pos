import type { RouteObject } from 'react-router';

export const branchRoutes: RouteObject[] = [
  {
    path: '/branch',
    async lazy() {
      const { default: Component } =
        await import('@genossys-erp/presentation/branch/pages/BranchPage');
      return { Component };
    },
  },
];
