import {
  LoginForm,
  LoginModel,
  AuthRepository,
} from '@genpos/core/modules/auth';
import { mapLoginFormToLoginRequest } from './auth.mapper';

export class AuthRepositoryImpl implements AuthRepository {
  login(form: LoginForm): Promise<LoginModel> {
    const request = mapLoginFormToLoginRequest(form);
    return Promise.resolve({
      accessToken: 'test',
    });
  }
}
