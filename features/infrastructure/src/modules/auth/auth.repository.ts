import {
  LoginForm,
  LoginModel,
  AuthRepository,
} from '@genpos/core/modules/auth';
import { mapLoginFormToLoginRequest } from './auth.mapper';
import { safeApiCall } from '@genpos/infrastructure/utils';

export class AuthRepositoryImpl implements AuthRepository {
  async login(form: LoginForm): Promise<LoginModel> {
    return safeApiCall(async () => {
      const request = mapLoginFormToLoginRequest(form);
      return Promise.resolve({
        accessToken: 'test',
      });
    });
  }
}
