import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle: string
  className?: string
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className="font-mono text-sm text-emerald-400">{`../${subtitle}`}</span>
      <h2 className="text-3xl font-medium">{title}</h2>
    </div>
  )
}
