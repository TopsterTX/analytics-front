import { z } from 'zod'

export const signUnFormSchema = z
  .object({
    name: z.string().nonempty(),
    email: z.string().nonempty(),
    password: z.string().min(6).nonempty(),
    'repeat-password': z.string().nonempty(),
  })
  .refine((data) => data.password === data['repeat-password'], {
    path: ['repeat-password'],
  })
