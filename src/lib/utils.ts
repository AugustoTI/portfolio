import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputClasses: ClassValue[]) {
  return twMerge(clsx(inputClasses))
}

import imageUrlBuilder from '@sanity/image-url'
import { type SanityImageSource } from '@sanity/image-url/lib/types/types'
import { sanityClient } from './sanity/client'

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (image: SanityImageSource) => builder.image(image)
