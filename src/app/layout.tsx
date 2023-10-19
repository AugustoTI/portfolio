import '@/styles/global.css'
import { type Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { type ReactNode } from 'react'

import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'This site was created using the NextJS framework 🚀',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
  style: ['normal'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
  style: ['normal'],
})

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={cn('antialiased', inter.variable, plexMono.variable)}>
      <body>{children}</body>
    </html>
  )
}
