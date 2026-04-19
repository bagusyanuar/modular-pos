import { LoginModel } from '../models/auth.model';
import { LoginForm } from '../../application/dtos/auth.input';

export interface AuthRepository {
  login(form: LoginForm): Promise<LoginModel>;
}
