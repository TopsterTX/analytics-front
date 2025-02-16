import { Separator } from 'react-aria-components'
import { IconAlignmentJustify, IconPerson } from 'justd-icons'
import { BurgerMenu, Button, MediaQuery, Switch, useMediaQuery } from '@/shared'

export const Header = () => {
  const mobile = useMediaQuery(MediaQuery.mobile)

  console.log(mobile)

  return (
    <header className="h-14 drop-shadow-md">
      <article className="flex items-center justify-between h-full px-6">
        <section className="">
          <BurgerMenu />
        </section>
        <section className="flex gap-4 items-center">
          <Switch />
          <IconPerson />
        </section>
      </article>
    </header>
  )
}
