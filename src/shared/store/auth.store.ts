import { create } from 'zustand'

export type AuthStore = {
  isSubmitting: boolean
  setIsSubmitting: (value: boolean) => void
}

export const useAuthStore = create<AuthStore>()((set) => ({
  isSubmitting: false,
  setIsSubmitting: (value) => set(() => ({ isSubmitting: value })),
}))
