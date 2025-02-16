import { Control, useWatch } from 'react-hook-form'
import { useEffect, useState } from 'react'

type UsePasswordProgressBar = (control: Control, name: string) => number

export const usePasswordProgressBar: UsePasswordProgressBar = (control, name) => {
  const [value, setValue] = useState(0)

  const passwordValue = useWatch({
    control,
    name,
  })

  useEffect(() => {
    setValue(passwordValue.length * 10)
  }, [passwordValue])

  return value
}
