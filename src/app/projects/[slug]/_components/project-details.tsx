'use client'

import { SectionTitle } from '@/components/section-title'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { badgeAnimation, fadeUpAnimation } from '@/lib/animations'
import { Project } from '@/types/hygraph/project'
import { RichText } from '@/components/rich-text'

interface ProjectDetailsProps {
  data: Project
}

export function ProjectDetails({ data }: ProjectDetailsProps) {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-4 pb-10 pt-24 sm:min-h-[750px] sm:pb-24">
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${data.page_thumbnail.url}) no-repeat center/cover`,
        }}
        initial={{ opacity: 0, scale: 1.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <SectionTitle
        title={data.title}
        subtitle="Projetos"
        className="items-center text-center [&>h2]:text-4xl"
      />
      <motion.div {...fadeUpAnimation} className="my-4 max-w-[640px] text-center sm:my-6">
        <RichText content={data.description.raw} />
      </motion.div>
      <ul className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        {data.technologies.map((technology, index) => (
          <Badge key={technology.id} asChild>
            <motion.li
              {...badgeAnimation}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {technology.name}
            </motion.li>
          </Badge>
        ))}
      </ul>
      <motion.div
        {...fadeUpAnimation}
        className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4"
      >
        <Button asChild className="min-w-[180px] gap-2 shadow-button hover:scale-105">
          <a href={data.github_url} target="_blank" rel="noreferrer">
            <TbBrandGithub size={20} />
            Repositório
          </a>
        </Button>
        <Button asChild className="min-w-[180px] gap-2 shadow-button hover:scale-105">
          <a href={data.project_url} target="_blank" rel="noreferrer">
            <FiGlobe size={20} />
            Projeto online
          </a>
        </Button>
      </motion.div>
      <Link
        href={'/projects'}
        className="inline-flex items-center justify-center gap-2 transition-colors hover:text-emerald-500"
      >
        <HiArrowNarrowLeft size={20} />
        Voltar para projetos
      </Link>
    </section>
  )
}
