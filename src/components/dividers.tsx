import { type ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

type HorizontalDividerProps = ComponentPropsWithoutRef<'div'>

export const horizontalDividerStyle = cn(
  'my-8 w-full border-b border-t-0 border-b-gray-800',
)

export function HorizontalDivider({ className, ...props }: HorizontalDividerProps) {
  return <hr className={cn(horizontalDividerStyle, className)} {...props} />
}
