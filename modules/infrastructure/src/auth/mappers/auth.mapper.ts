import type { LoginInput } from '@core/auth/application/inputs';
import type { LoginModel } from '@core/auth/domains/models';
import type { LoginRequest, LoginResponse } from '@/auth/schemas';

export const mapInputToRequest = (input: LoginInput): LoginRequest => ({
  email: input.email,
  password: input.password,
});

export const mapResponseToModel = (response: LoginResponse): LoginModel => ({
  accessToken: response.access_token,
});
