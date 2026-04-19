import { AuthRepository } from './auth.repository';
import { LoginForm } from './auth.input';
import { LoginModel } from './auth.model';

export class Login {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(form: LoginForm): Promise<LoginModel> {
    return this.authRepository.login(form);
  }
}
