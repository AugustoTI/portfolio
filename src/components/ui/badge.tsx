import { ComponentPropsWithoutRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

export interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  asChild?: boolean
}

export function Badge({ className, asChild, ...props }: BadgeProps) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={cn(
        'rounded-lg bg-emerald-900/80 px-3 py-1 text-sm text-emerald-400',
        className,
      )}
      {...props}
    />
  )
}
