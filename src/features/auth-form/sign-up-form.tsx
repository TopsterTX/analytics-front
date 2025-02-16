import { useCallback, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { BaseButton, BaseTextField, Form, ProgressBar, useAuthStore } from '@/shared'
import { signUnFormSchema } from './sign-up-form.schema'
import { usePasswordProgressBar } from '@/features/auth-form/hooks'
import clsx from 'clsx'

export const SignUpForm = () => {
  const [loading, setLoading] = useState(false)

  const form = useForm({
    resolver: zodResolver(signUnFormSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      'repeat-password': '',
    },
  })

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form

  const { setIsSubmitting } = useAuthStore()
  const value = usePasswordProgressBar(control, 'password')

  const onSubmitHandler = useCallback(
    handleSubmit((value) => {
      setLoading(true)
      setIsSubmitting(true)
      setTimeout(() => {
        console.log({ value })
        setIsSubmitting(false)
        setLoading(false)
      }, 2000)
    }, console.log),
    [handleSubmit],
  )

  const repeatPasswordValue = form.watch('repeat-password')

  const isRepeatPasswordError = Boolean(errors['repeat-password']?.message)
  const isPasswordError = Boolean(errors.password?.message)

  return (
    <FormProvider {...form}>
      <Form className="flex flex-col gap-6 py-4" onSubmit={onSubmitHandler}>
        <div className="w-full flex flex-col gap-3">
          <BaseTextField name="name" label="Имя" isDisabled={loading} />
          <BaseTextField name="email" label="Почта" isDisabled={loading} type="email" />
          <BaseTextField name="password" label="Пароль" isDisabled={loading} type="password" isRevealable />
          <ProgressBar
            value={value}
            progressClassName={clsx({
              ['bg-danger!']: isPasswordError || (isRepeatPasswordError && repeatPasswordValue),
            })}
          />
          <BaseTextField
            name="repeat-password"
            label="Подтвердите пароль"
            isDisabled={loading}
            type="password"
            isRevealable
          />
        </div>
        <BaseButton size="small" type="submit" isPending={loading} loadingText="Создание аккаунта">
          Создать аккаунт
        </BaseButton>
      </Form>
    </FormProvider>
  )
}
