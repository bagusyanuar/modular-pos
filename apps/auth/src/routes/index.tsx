import { createFileRoute } from '@tanstack/react-router';
import LoginPage from '@genpos/presentation/modules/auth/login/LoginPage';

export const Route = createFileRoute('/')({
  component: LoginPage,
});
