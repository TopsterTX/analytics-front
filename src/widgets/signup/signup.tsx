import { AnimateWrapper, SignUpForm } from '@/features'

export const SignUp = () => {
  return (
    <div className="full-page flex justify-center items-center">
      <div className="w-full px-4 py-4 md:max-w-96">
        <AnimateWrapper>
          <SignUpForm />
        </AnimateWrapper>
      </div>
    </div>
  )
}
