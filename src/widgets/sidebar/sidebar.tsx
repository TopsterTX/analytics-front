import clsx from 'clsx'
import { Button } from '@/shared'

type SidebarProps = {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <section className={clsx('border-2 w-full p-4 rounded-2xl hidden fixed', className)}>
      <div className="flex flex-col gap-2">
        <Button>First Button</Button>
        <Button>Second Button</Button>
        <Button>Third Button</Button>
      </div>
    </section>
  )
}
