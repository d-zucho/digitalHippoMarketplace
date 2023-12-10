import { z } from 'zod'

export const AuthCredentialsValidator = z.object({
  email: z.string().email(), // checks that string is email ('@')
  password: z.string().min(8, { message: 'Must be at least 8 characters' }),
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>
