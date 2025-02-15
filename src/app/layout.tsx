'use client'

import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { JustdProviders } from '@/shared/components'
import './globals.css'

// export const metadata: Metadata = {
//   title: 'Analytics web app',
//   description: 'Analytics for your web apps',
// }

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
