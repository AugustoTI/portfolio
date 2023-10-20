import { ReactNode } from 'react'

interface KnownSectionItemProps {
  tech: {
    icon: ReactNode
    name: string
  }
}

export function KnownSectionItem({ tech }: KnownSectionItemProps) {
  return (
    <div
      className="flex items-center gap-2 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-colors duration-200 hover:bg-gray-600/30 hover:text-emerald-500
    "
    >
      {tech.icon}
      <p className="font-medium">{tech.name}</p>
    </div>
  )
}
