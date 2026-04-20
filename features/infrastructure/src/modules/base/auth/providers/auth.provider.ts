import { api } from '@genpos/infrastructure/utils';
import { Login } from '@genpos/core/modules/base/auth';
import { AuthRepositoryImpl } from '../repositories';

const authRepository = new AuthRepositoryImpl(api);
export const loginUseCase = new Login(authRepository);
