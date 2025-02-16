'use client'

import { useController, useFormContext } from 'react-hook-form'
import { FieldError, Input, Label, TextField, TextFieldProps } from '@/shared/components'

export type BaseTextFieldProps = TextFieldProps & {
  name: string
}

export const BaseTextField = ({ name, ...rest }: BaseTextFieldProps) => {
  const { control } = useFormContext()
  const {
    field,
    fieldState: { error, invalid },
  } = useController({
    control,
    name,
  })

  return (
    <TextField
      {...field}
      isInvalid={Boolean(error?.message)}
      error={Boolean(error?.message)}
      // errorMessage={error?.message}
      // error={Boolean(error?.message)}
      // isRequired={true}
      {...rest}
    />
  )
}
