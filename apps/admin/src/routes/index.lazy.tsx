import { createLazyFileRoute } from '@tanstack/react-router';
import { DashboardPage } from '@genpos/presentation/modules/dashboard/pages/DashboardPage';

export const Route = createLazyFileRoute('/')({
  component: DashboardPage,
});
