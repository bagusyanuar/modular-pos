import { Login } from '@core/auth/application/usecases';
import { httpClient } from '@/libs';
import { AuthRepositoryImpl } from '../repositories';

/**
 * Auth Container - Composition Root untuk modul Auth.
 * Di sini kita merakit semua dependensi (Infrastructure & Core).
 */

// 1. Instansiasi Repository dengan HttpClient
export const authRepository = new AuthRepositoryImpl(httpClient);

// 2. Instansiasi Use Cases dengan Repository
export const loginUseCase = new Login(authRepository);
