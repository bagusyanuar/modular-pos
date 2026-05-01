import type { LoginInput } from '@/auth/application/inputs';
import type { AuthRepository } from '@/auth/domains/repositories';
import type { LoginModel } from '@/auth/domains/models';

export class Login {
  constructor(private repository: AuthRepository) {}

  async execute(input: LoginInput): Promise<LoginModel> {
    return await this.repository.login(input);
  }
}
