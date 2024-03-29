import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/features/header'
import { getSession } from '@/entities/session/actions'
import { BgMain } from '@/widgets/bg-main'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netflix clone',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  
  const session = await getSession()
  const isAuth: boolean = !!session?.user?.email
  
  return (
    <html lang="uk">
      <body className={inter.className}>
        <BgMain>
          <Header isAuth={isAuth} />
          {children}
        </BgMain>
      </body>
    </html>
  )
}
