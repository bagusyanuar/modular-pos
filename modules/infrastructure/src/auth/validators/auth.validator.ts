import { z } from 'zod';
import type { LoginInput } from '@core/auth/application/inputs';

export const loginInputSchema = z.object({
  email: z.email('invalid email format').nonempty('email is required'),
  password: z
    .string()
    .min(6, 'password must be at least 6 characters')
    .nonempty('password is required'),
}) as z.ZodType<LoginInput>;
