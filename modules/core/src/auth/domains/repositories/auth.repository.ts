import type { LoginInput } from '@/auth/application/inputs';
import type { LoginModel } from '@/auth/domains/models';

export interface AuthRepository {
  login(input: LoginInput): Promise<LoginModel>;
}
