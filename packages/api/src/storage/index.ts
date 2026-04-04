import { cookieStorage } from '@genpos/utils';

const ACCESS_TOKEN_KEY = 'access_token';

export const tokenStorage = {
  getAccessToken: (): string | null => {
    return cookieStorage.get<string>(ACCESS_TOKEN_KEY);
  },

  setAccessToken: (accessToken: string): void => {
    cookieStorage.set(ACCESS_TOKEN_KEY, accessToken);
  },

  clearAccessToken: (): void => {
    cookieStorage.remove(ACCESS_TOKEN_KEY);
  },
};
