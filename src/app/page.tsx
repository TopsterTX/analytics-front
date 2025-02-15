'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/shared/components'
import { Path } from '@/shared'

export default function Home() {
  const router = useRouter()

  const onClickHandler = useCallback(() => {
    router.replace(Path.auth)
  }, [])

  return (
    <div>
      <p>Главная страница</p>
      <Button onPress={onClickHandler}>Войти</Button>
    </div>
  )
}
