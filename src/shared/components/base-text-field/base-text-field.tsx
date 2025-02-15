'use client'

import { useController, useFormContext } from 'react-hook-form'
import { TextField, TextFieldProps } from '@/shared/components'

export type BaseTextFieldProps = TextFieldProps & {
  name: string
}

export const BaseTextField = ({ name, ...rest }: BaseTextFieldProps) => {
  const { control } = useFormContext()
  const { field } = useController({
    control,
    name,
  })

  return <TextField {...field} {...rest} />
}
