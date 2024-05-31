'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [tg, setTg] = useState<WebApp | null>(null)

  useEffect(() => {
    console.log('useTelegram')
    function initTg() {
      if (
        typeof window !== 'undefined' &&
        window.Telegram &&
        window.Telegram.WebApp
      ) {
        console.log('Telegram WebApp is set')
        const tgData = window.Telegram.WebApp
        setTg(tgData)
      } else {
        console.log('Telegram WebApp is undefined, retrying…')
        setTimeout(initTg, 500)
      }
    }
    initTg()
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>{tg?.initDataUnsafe.user?.first_name || 'НЕТУ'}</h3>
    </main>
  )
}
