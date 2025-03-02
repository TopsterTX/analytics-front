'use client'

import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BaseButton, BaseTextField, Link, ProgressBar } from '@/shared'
import { SignUpFormFields } from '@/features/auth'
import { Path } from '@/shared'
import { usePasswordProgressBar } from './hooks'
import { signUpFormSchema } from './sign-up-form.schema'
import { useAuthStore } from '../../store'

export const SignUpForm = () => {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      [SignUpFormFields.name]: '',
      [SignUpFormFields.email]: '',
      [SignUpFormFields.password]: '',
      [SignUpFormFields.repeatPassword]: '',
    },
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form

  const { isPending, signup } = useAuthStore()
  // eslint-disable-next-line
  // @ts-ignore
  const value = usePasswordProgressBar(control, SignUpFormFields.password)

  const onSubmitHandler = useCallback(
    handleSubmit(async (value) => {
      await signup(value)
      router.replace(Path.home)
    }, console.log),
    [signup],
  )

  const repeatPasswordValue = form.watch(SignUpFormFields.repeatPassword)

  const isRepeatPasswordError = Boolean(errors[SignUpFormFields.repeatPassword]?.message)
  const isPasswordError = Boolean(errors[SignUpFormFields.password]?.message)

  return (
    <FormProvider {...form}>
      <form className="auth-form" onSubmit={onSubmitHandler}>
        <div className="w-full flex flex-col gap-3">
          <BaseTextField name={SignUpFormFields.name} placeholder="Имя" isDisabled={isPending} />
          <BaseTextField name={SignUpFormFields.email} placeholder="Почта" isDisabled={isPending} type="email" />
          <BaseTextField
            name={SignUpFormFields.password}
            placeholder="Пароль"
            isDisabled={isPending}
            type="password"
            isRevealable
          />
          <ProgressBar
            value={value}
            progressClassName={clsx({
              ['bg-danger!']: isPasswordError || (isRepeatPasswordError && repeatPasswordValue),
            })}
          />
          <BaseTextField
            name={SignUpFormFields.repeatPassword}
            placeholder="Подтвердите пароль"
            isDisabled={isPending}
            type="password"
            isRevealable
          />
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <BaseButton
            size="medium"
            type="submit"
            isPending={isPending}
            loadingText="Создание аккаунта"
            className="w-full md:w-auto"
          >
            Создать аккаунт
          </BaseButton>
          <p className="md:text-end">
            Уже есть аккаунт ?{' '}
            <Link href={Path.signin} className="hover:text-link">
              Войти
            </Link>
          </p>
        </div>
      </form>
    </FormProvider>
  )
}
