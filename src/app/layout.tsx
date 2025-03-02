'use client'

import { ReactNode } from 'react'
import { JustdProviders } from '@/shared/components'
import './globals.css'
import { Header } from '../widgets/header'

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <JustdProviders>{children}</JustdProviders>
      </body>
    </html>
  )
}
