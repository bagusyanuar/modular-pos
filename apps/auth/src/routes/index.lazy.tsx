import { createLazyFileRoute } from '@tanstack/react-router';
import LoginPage from '@genpos/presentation/modules/auth/pages/LoginPage';

export const Route = createLazyFileRoute('/')({
  component: LoginPage,
});
