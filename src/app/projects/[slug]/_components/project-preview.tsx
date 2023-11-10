'use client'

import Image from 'next/image'
import { type Project } from '@/types/hygraph/project'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/lib/animations'

interface ProjectPreviewProps {
  previews: Project['sections']
}

export function ProjectPreview({ previews }: ProjectPreviewProps) {
  return (
    <section className="container my-12  px-4 md:my-32">
      <ul className="flex flex-col gap-8 md:gap-32">
        {previews.map((preview) => (
          <motion.li
            key={`preview-${preview.id}`}
            {...fadeUpAnimation}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6 md:gap-12"
          >
            <h3 className="text-2xl font-medium text-gray-300 md:text-3xl">
              {preview.title}
            </h3>
            <Image
              src={preview.image.url}
              width={1080}
              height={672}
              alt={`Preview da seção ${preview.title}`}
              className="aspect-auto w-full rounded-lg object-cover"
              quality={85}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
