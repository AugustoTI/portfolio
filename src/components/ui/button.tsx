import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { tv, type VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'flex items-center justify-center rounded-lg transition focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default:
        'bg-emerald-600 text-gray-50 hover:bg-emerald-500 focus-visible:ring-emerald-400',
      ghost: 'hover:bg-gray-800 text-gray-300 hover:text-emerald-500 focus-visible:ring',
    },
    size: {
      default: 'px-4 py-3',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = forwardRef<ElementRef<'button'>, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'
