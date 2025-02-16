import { useState } from 'react'
import { IconAlignmentJustify, IconPlus } from 'justd-icons'

type BurgerMenuProps = {
  onClick?: (value: boolean) => void
}

export const BurgerMenu = ({ onClick }: BurgerMenuProps) => {
  const [open, setOpen] = useState(false)

  const onClickHandler = () => {
    onClick?.(open)
    setOpen(!open)
  }

  return !open ? (
    <IconAlignmentJustify onClick={onClickHandler} />
  ) : (
    <IconPlus scale={6} className="rotate-45" onClick={onClickHandler} />
  )
}
