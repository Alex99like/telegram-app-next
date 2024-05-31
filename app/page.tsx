'use client'

import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h3>
        {window.Telegram?.WebApp?.initDataUnsafe.user?.first_name || 'НЕТУ'}
      </h3>
    </main>
  )
}
