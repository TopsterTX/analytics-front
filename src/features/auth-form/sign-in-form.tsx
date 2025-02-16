'use client'

import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { BaseButton, BaseCheckbox, BaseTextField } from '@/shared/components'
import { useAuthStore } from '@/shared'

export const SignInForm = () => {
  const [loading, setLoading] = useState(false)
  const form = useForm({
    defaultValues: {
      remember: false,
      name: '',
      password: '',
    },
  })
  const { setIsSubmitting } = useAuthStore()

  const { handleSubmit } = form

  const onSubmitHandler = useCallback(
    handleSubmit((values) => {
      setLoading(true)
      setIsSubmitting(true)
      setTimeout(() => {
        setLoading(false)
        setIsSubmitting(false)
      }, 2000)
    }),
    [handleSubmit],
  )

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-6 py-4" onSubmit={onSubmitHandler}>
        <div className="w-full flex flex-col gap-3">
          <BaseTextField name="name" label="Имя" isDisabled={loading} />
          <BaseTextField name="password" label="Пароль" isDisabled={loading} type="password" isRevealable />
          <BaseCheckbox name="remember" label="Запомнить" isDisabled={loading} />
        </div>
        <BaseButton type="submit" size="small" loadingText="Вход" isPending={loading}>
          Войти
        </BaseButton>
      </form>
    </FormProvider>
  )
}
