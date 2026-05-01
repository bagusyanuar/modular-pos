import type { AuthRepository } from '@core/auth/domains/repositories';
import type { LoginInput } from '@core/auth/application/inputs';
import type { LoginModel } from '@core/auth/domains/models';
import { mapInputToRequest, mapResponseToModel } from '@/auth/mappers';
import type { LoginResponse } from '@/auth/schemas';
import { safeApiCall } from '@/libs';
import type { HttpClient } from '@genossys-erp/http';

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private http: HttpClient) {}

  async login(input: LoginInput): Promise<LoginModel> {
    return await safeApiCall(async () => {
      const request = mapInputToRequest(input);

      const response = await this.http.post<LoginResponse>(
        '/auth/login',
        request
      );

      return mapResponseToModel(response.data);
    });
  }
}
