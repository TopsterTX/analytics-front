import { Tabs } from '@/shared/components'
import { SignInForm, SignUpForm } from '@/features'
import { useAuthStore } from '@/shared'

const SIGN_IN_ID = 'sign-in'
const SIGN_UP_ID = 'sign-up'

export const Auth = () => {
  const { isSubmitting } = useAuthStore()
  return (
    <div className="w-80 border rounded-xl px-4 py-2 m-auto">
      <Tabs aria-label="Recipe App">
        <Tabs.List>
          <Tabs.Tab id={SIGN_IN_ID} isDisabled={isSubmitting}>
            Вход
          </Tabs.Tab>
          <Tabs.Tab id={SIGN_UP_ID} isDisabled={isSubmitting}>
            Регистрация
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel id={SIGN_IN_ID}>
          <SignInForm />
        </Tabs.Panel>
        <Tabs.Panel id={SIGN_UP_ID}>
          <SignUpForm />
        </Tabs.Panel>
      </Tabs>
    </div>
  )
}
