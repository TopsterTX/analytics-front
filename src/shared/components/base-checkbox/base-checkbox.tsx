import { Checkbox, CheckboxProps } from '@/shared'
import { useController, useFormContext } from 'react-hook-form'

type BaseCheckboxProps = CheckboxProps & {
  name: string
}

export const BaseCheckbox = ({ name, ...rest }: BaseCheckboxProps) => {
  const { control } = useFormContext()
  const { field } = useController({ control, name })

  return <Checkbox {...field} {...rest} />
}
