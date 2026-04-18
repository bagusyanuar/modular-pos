import { LoginForm, LoginModel } from '@genpos/core/modules/auth';
export interface AuthRepository {
  login(form: LoginForm): Promise<LoginModel>;
}
