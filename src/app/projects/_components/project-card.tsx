'use client'

import { type HighlightProject as PartialProject } from '@/types/hygraph/page-info'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUpAnimation } from '@/lib/animations'

export function ProjectCard(props: PartialProject) {
  const technologies = props.technologies.map((technology) => technology.name).join(', ')

  return (
    <motion.div
      {...fadeUpAnimation}
      className="group flex h-[436px] flex-col overflow-hidden rounded-lg border-2 border-transparent bg-gray-800 opacity-70 transition hover:border-emerald-500 hover:opacity-100"
    >
      <div className=" h-48 w-full overflow-hidden">
        <Image
          src={props.thumbnail.url}
          width={380}
          height={200}
          alt="Thumbnail do projeto"
          unoptimized
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <strong className="font-medium text-gray-50/90 transition group-hover:text-emerald-500">
          {props.title}
        </strong>
        <p className="mt-2 line-clamp-4 text-gray-400">{props.short_description}</p>
        <span className="mt-auto block truncate text-sm font-medium text-gray-300">
          {technologies}
        </span>
      </div>
    </motion.div>
  )
}
