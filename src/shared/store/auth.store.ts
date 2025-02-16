import { create } from 'zustand'
import { ofetch } from 'ofetch'

type SignInValues = { name: string; password: string }
type SignUpValues = { name: string; email: string; password: string; 'repeat-password': string }

export type AuthStore = {
  isSubmitting: boolean
  setIsSubmitting: (value: boolean) => void
  isPending: boolean
  signin: (values: SignInValues) => void
  signup: (values: SignUpValues) => void
}

export const useAuthStore = create<AuthStore>()((set) => ({
  isSubmitting: false,
  setIsSubmitting: (value) => set(() => ({ isSubmitting: value })),
  isPending: false,
  signin: async () => {
    set({ isPending: true })
    await new Promise((res, rej) => {
      setTimeout(() => {
        set({ isPending: false })
        res(1)
      }, 2000)
    })

    // const response = await ofetch('', {
    //   method: 'GET',
    // })
  },
  signup: async (values) => {
    set({ isPending: true })
    await new Promise((res, rej) => {
      setTimeout(() => {
        set({ isPending: false })
        res(1)
      }, 2000)
    })

    // const response = await ofetch('', {
    //   method: 'POST',
    //   body: values,
    // })
  },
}))
