import { HttpClient } from '@genpos/http/client';
import {
  LoginForm,
  LoginModel,
  AuthRepository,
} from '@genpos/core/modules/base/auth';
import { safeApiCall } from '@genpos/infrastructure/utils';
import { mapLoginFormToLoginRequest } from '../mappers';
import { LoginResponse } from '../schemas';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async login(form: LoginForm): Promise<LoginModel> {
    return safeApiCall(async () => {
      const request = mapLoginFormToLoginRequest(form);
      const { data } = await this.httpClient.post<LoginResponse>(
        '/auth/login',
        request
      );

      return {
        accessToken: data.access_token,
      };
    });
  }
}
