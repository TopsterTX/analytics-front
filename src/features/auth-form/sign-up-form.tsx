import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import clsx from 'clsx'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BaseButton, BaseTextField, Form, ProgressBar, useAuthStore } from '@/shared'
import { SignUpFormFields } from '@/features'
import { Path } from '@/shared'
import { usePasswordProgressBar } from './hooks'
import { signUpFormSchema } from './sign-up-form.schema'

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
      <Form className="flex flex-col gap-6 py-4" onSubmit={onSubmitHandler}>
        <div className="w-full flex flex-col gap-3">
          <BaseTextField name={SignUpFormFields.name} label="Имя" isDisabled={isPending} />
          <BaseTextField name={SignUpFormFields.email} label="Почта" isDisabled={isPending} type="email" />
          <BaseTextField
            name={SignUpFormFields.password}
            label="Пароль"
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
            label="Подтвердите пароль"
            isDisabled={isPending}
            type="password"
            isRevealable
          />
        </div>
        <BaseButton size="small" type="submit" isPending={isPending} loadingText="Создание аккаунта">
          Создать аккаунт
        </BaseButton>
      </Form>
    </FormProvider>
  )
}
