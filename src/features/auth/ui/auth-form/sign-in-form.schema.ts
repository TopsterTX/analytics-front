import { z } from 'zod'
import { SignInFormFields } from './const'

export const signInFormSchema = z.object({
  [SignInFormFields.name]: z.string().nonempty(),
  [SignInFormFields.password]: z.string().nonempty(),
  [SignInFormFields.remember]: z.boolean(),
})
