'use client'

import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { BaseTextField, Button, ProgressCircle } from '@/shared/components'

export const SignInForm = () => {
  const [loading, setLoading] = useState(false)
  const form = useForm()

  const onEnterHandler = useCallback(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-6 py-4">
        <div className="w-full flex flex-col gap-3">
          <BaseTextField name="name" label="Имя" isDisabled={loading} />
          <BaseTextField name="password" label="Пароль" isDisabled={loading} />
        </div>
        <Button size="small" onPress={onEnterHandler} isPending={loading}>
          {({ isPending }) => (
            <>
              {isPending && <ProgressCircle isIndeterminate aria-label="Creating..." />}
              {loading ? 'Вход...' : 'Войти'}
            </>
          )}
        </Button>
      </form>
    </FormProvider>
  )
}
