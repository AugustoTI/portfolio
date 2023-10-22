import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-9xl font-bold text-emerald-500 drop-shadow-button">404</h1>
      <h2 className="mb-4 text-3xl font-medium text-gray-400">Página não encontrada</h2>
      <Button asChild className="gap-2 shadow-button">
        <Link href="/">
          <HiArrowNarrowLeft size={20} aria-hidden />
          Voltar para Home
        </Link>
      </Button>
    </div>
  )
}
