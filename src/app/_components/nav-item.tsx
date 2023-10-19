'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  label: string
  href: string
}

export function NavItem({ label, href }: NavItemProps) {
  const pathname = usePathname()

  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 font-mono font-medium text-gray-400',
        isActive && 'text-gray-50',
      )}
    >
      <span className=" text-emerald-400">#</span>
      {label}
    </Link>
  )
}
