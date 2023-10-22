import '@/styles/global.css'
import { type Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import { type ReactNode } from 'react'
import { Toaster } from 'sonner'

import { cn } from '@/lib/utils'
import { Header } from './_components/header'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { BackToTop } from './_components/back-to-top'

export const metadata: Metadata = {
  title: {
    default: 'Augusto César',
    template: '%s | Augusto César',
  },
  description:
    'Site portfolio construido pelo desenvolvedor Augusto César 🚀. Geração do site feita utilizando NextJS ✨',
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
      <body>
        <Toaster richColors />
        <BackToTop />
        <Header />
        {children}
        <ContactSection />
        <Footer />
      </body>
    </html>
  )
}
