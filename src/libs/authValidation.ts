import * as z from 'zod';

const EMAIL_REGEX = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const LoginValidation = z.object({
  emailAddress: z
    .string()
    .min(1, { message: 'Email address is required' })
    .email({
      message: 'Invalid email address. Please enter a valid email address',
    }),
  // password: z
  //   .string()
  //   .min(8, { message: 'Password must be at least 8 characters.' }),
});
