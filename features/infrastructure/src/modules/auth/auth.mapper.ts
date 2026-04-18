import { LoginRequest } from '@genpos/infrastructure/modules/auth';
import { LoginForm } from '@genpos/core/modules/auth';

export const mapLoginFormToLoginRequest = (form: LoginForm): LoginRequest => {
  return {
    email: form.email,
    password: form.password,
  };
};
