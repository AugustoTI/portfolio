'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { type HighlightProject } from '@/lib/sanity/queries/home'
import { urlFor } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { badgeAnimation, fadeUpAnimation } from '@/lib/animations'

type HighlightedProjectsItemProps = HighlightProject

export function HighlightedProjectsItem(props: HighlightedProjectsItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 gap-6 lg:grid-cols-[450px,1fr] lg:gap-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <Image
          src={urlFor(props.thumbnail).width(420).height(304).url()}
          width={420}
          height={304}
          alt="Thumbnail do projeto"
          className="h-[200px] w-full rounded-lg object-cover sm:h-[300px] lg:min-h-full lg:w-[420px]"
        />
      </motion.div>

      <div>
        <motion.h3
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
          className="text-lg font-medium text-gray-50"
        >
          {props.name}
        </motion.h3>
        <motion.p
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
          className="my-6 text-gray-400"
        >
          {props.short_description}
        </motion.p>
        <ul className="mb-8 flex flex-wrap gap-2 gap-y-3 lg:max-w-[350px]">
          {props.technologies.map((technology, index) => (
            <Badge key={technology._id} asChild className="font-normal">
              <motion.li
                {...badgeAnimation}
                transition={{ duration: 0.2, delay: 0.5 + index * 0.1 }}
              >
                {technology.name}
              </motion.li>
            </Badge>
          ))}
        </ul>
        <Button asChild variant="ghost" className="w-max gap-2 text-sm">
          <Link href={`/projects/${props.slug.current}`}>
            Veja mais <HiArrowNarrowRight aria-hidden />
          </Link>
        </Button>
      </div>
    </motion.div>
  )
}
