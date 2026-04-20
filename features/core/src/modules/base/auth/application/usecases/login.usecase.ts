import { AuthRepository } from '../../domain/repositories/auth.repository';
import { LoginForm } from '../dtos/auth.input';
import { LoginModel } from '../../domain/models/auth.model';

export class Login {
  constructor(private readonly authRepository: AuthRepository) {}

  async execute(form: LoginForm): Promise<LoginModel> {
    return this.authRepository.login(form);
  }
}
