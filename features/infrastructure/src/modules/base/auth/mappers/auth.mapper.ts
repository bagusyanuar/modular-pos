import { LoginForm } from '@genpos/core/modules/base/auth';
import { LoginRequest } from '../schemas';

export const mapLoginFormToLoginRequest = (form: LoginForm): LoginRequest => {
  return {
    email: form.email,
    password: form.password,
  };
};
