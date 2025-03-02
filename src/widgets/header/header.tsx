'use client'

import { IconPerson } from 'justd-icons'
import { BurgerMenu, Switch } from '@/shared'

export const Header = () => {
  return (
    <header className="h-14 drop-shadow-md border-b-2">
      <article className="flex items-center justify-between h-full px-6">
        <section className="">
          <BurgerMenu />
        </section>
        <section className="w-full flex gap-4 items-center justify-end">
          <Switch />
          <IconPerson />
        </section>
      </article>
    </header>
  )
}
