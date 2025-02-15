'use client'

import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
import { RouterProvider } from 'react-aria-components'
import { ThemeProvider } from './theme-provider'

declare module 'react-aria-components' {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>['push']>[1]>
  }
}

export function JustdProviders({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <RouterProvider navigate={router.push}>
      <ThemeProvider enableSystem attribute="class">
        {children}
      </ThemeProvider>
    </RouterProvider>
  )
}
