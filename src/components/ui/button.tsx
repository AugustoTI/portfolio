import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  asChild?: boolean
}

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-gray-50 transition-all hover:bg-emerald-500 disabled:opacity-50',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
