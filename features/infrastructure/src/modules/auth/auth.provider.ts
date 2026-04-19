import { api } from '@genpos/infrastructure/utils';
import { AuthRepositoryImpl } from './auth.repository';
import { Login } from '@genpos/core/modules/auth';

const authRepository = new AuthRepositoryImpl(api);
export const loginUseCase = new Login(authRepository);
