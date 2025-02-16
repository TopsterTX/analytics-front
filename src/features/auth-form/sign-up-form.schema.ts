import { z } from 'zod'
import { SignUpFormFields } from './const'

export const signUpFormSchema = z
  .object({
    [SignUpFormFields.name]: z.string().nonempty(),
    [SignUpFormFields.email]: z.string().nonempty(),
    [SignUpFormFields.password]: z.string().min(6).nonempty(),
    [SignUpFormFields.repeatPassword]: z.string().nonempty(),
  })
  .refine((data) => data[SignUpFormFields.password] === data[SignUpFormFields.repeatPassword], {
    path: [SignUpFormFields.repeatPassword],
  })
