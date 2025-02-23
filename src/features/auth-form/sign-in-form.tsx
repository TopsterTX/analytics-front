'use client'

import { useCallback } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BaseButton, BaseCheckbox, BaseTextField, Link } from '@/shared/components'
import { Path, useAuthStore } from '@/shared'
import { SignInFormFields } from '@/features'
import { signInFormSchema } from './sign-in-form.schema'

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
      <form className="auth-form" onSubmit={onSubmitHandler}>
        <div className="w-full flex flex-col gap-3">
          <BaseTextField name={SignInFormFields.name} placeholder="Имя" isDisabled={isPending} />
          <BaseTextField
            name={SignInFormFields.password}
            placeholder="Пароль"
            isDisabled={isPending}
            type="password"
            isRevealable
          />
          <BaseCheckbox name={SignInFormFields.remember} label="Запомнить" isDisabled={isPending} />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center md:flex-row md:justify-between md:items-end">
          <BaseButton type="submit" size="medium" loadingText="Вход" isPending={isPending} className="w-full md:w-auto">
            Войти
          </BaseButton>
          <Link isDisabled={isPending} href={Path.signup} className="hover:text-link">
            Зарегистрироваться
          </Link>
        </div>
      </form>
    </FormProvider>
  )
}
