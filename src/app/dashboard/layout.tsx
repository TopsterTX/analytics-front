import { ReactNode } from 'react'
import { Sidebar, Header } from '@/widgets'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Header />
      <div className="flex lg:grid lg:grid-cols-12 lg:gap-4">
        <Sidebar className="lg:relative lg:block lg:col-span-3" />
        <div className="lg:col-span-9">{children}</div>
      </div>
    </div>
  )
}
