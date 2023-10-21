interface KnownSectionItemProps {
  tech: {
    icon: string | TrustedHTML
    name: string
  }
}

export function KnownSectionItem({ tech }: KnownSectionItemProps) {
  return (
    <div
      className="flex items-center gap-4 rounded-lg bg-gray-600/20 p-6 text-gray-500 transition-colors duration-200 hover:bg-gray-600/30 hover:text-emerald-500
    "
    >
      <i
        dangerouslySetInnerHTML={{ __html: tech.icon }}
        className="h-8 w-8"
        aria-hidden
      />
      <p className="font-medium">{tech.name}</p>
    </div>
  )
}
