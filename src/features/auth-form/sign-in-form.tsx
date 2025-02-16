'use client'

import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BaseButton, BaseCheckbox, BaseTextField } from '@/shared/components'
import { useAuthStore } from '@/shared'
import { signInFormSchema } from './sign-in-form.schema'
import { SignInFormFields } from '@/features'

export const SignInForm = () => {
  const form = useForm({
    defaultValues: {
      [SignInFormFields.remember]: false,
      [SignInFormFields.name]: '',
      [SignInFormFields.password]: '',
    },
    resolver: zodResolver(signInFormSchema),
  })
  const { isPending, signin } = useAuthStore()

  const { handleSubmit } = form

  const onSubmitHandler = useCallback(
    handleSubmit((values) => {
      signin(values)
    }, console.log),
    [signin],
  )

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-6 py-4" onSubmit={onSubmitHandler}>
        <div className="w-full flex flex-col gap-3">
          <BaseTextField name={SignInFormFields.name} label="Имя" isDisabled={isPending} />
          <BaseTextField
            name={SignInFormFields.password}
            label="Пароль"
            isDisabled={isPending}
            type="password"
            isRevealable
          />
          <BaseCheckbox name={SignInFormFields.remember} label="Запомнить" isDisabled={isPending} />
        </div>
        <BaseButton type="submit" size="small" loadingText="Вход" isPending={isPending}>
          Войти
        </BaseButton>
      </form>
    </FormProvider>
  )
}
