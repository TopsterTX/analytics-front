import { FormProvider, useForm } from 'react-hook-form'
import { BaseTextField, Button } from '@/shared/components'

export const SignUpForm = () => {
  const form = useForm()
  const { handleSubmit } = form

  const onSubmitHandler = handleSubmit((value) => {
    console.log({ value })
  })

  return (
    <FormProvider {...form}>
      <form className="flex flex-col gap-6 py-4" onSubmit={onSubmitHandler}>
        <div className="w-full flex flex-col gap-3">
          <BaseTextField name="name" label="Имя" />
          <BaseTextField name="email" label="Почта" />
          <BaseTextField name="password" label="Пароль" />
        </div>
        <Button size="small" type="submit">
          Создать аккаунт
        </Button>
      </form>
    </FormProvider>
  )
}
