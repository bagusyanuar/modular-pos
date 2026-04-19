import { HttpClient } from '@genpos/http/client';
import {
  LoginForm,
  LoginModel,
  AuthRepository,
} from '@genpos/core/modules/auth';
import { mapLoginFormToLoginRequest } from './auth.mapper';
import { safeApiCall } from '@genpos/infrastructure/utils';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async login(form: LoginForm): Promise<LoginModel> {
    return safeApiCall(async () => {
      const request = mapLoginFormToLoginRequest(form);
      const { data } = await this.httpClient.post<{ access_token: string }>(
        '/auth/login',
        request
      );

      return {
        accessToken: data.access_token,
      };
    });
  }
}
