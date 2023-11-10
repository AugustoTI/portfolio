import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputClasses: ClassValue[]) {
  return twMerge(clsx(inputClasses))
}
