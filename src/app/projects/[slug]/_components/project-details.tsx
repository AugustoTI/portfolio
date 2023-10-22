import { SectionTitle } from '@/components/section-title'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'
import { type Project } from '@/lib/sanity/queries/home'
import { urlFor } from '@/lib/utils'
import { PortableText, PortableTextReactComponents } from '@portabletext/react'

interface ProjectDetailsProps {
  data: Project
}

const myPortableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal({ children }) {
      return (
        <p className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
          {children}
        </p>
      )
    },
  },
  marks: {
    strong({ children }) {
      return <strong className="font-medium text-gray-50">{children}</strong>
    },
    link: ({ value, children }) => {
      const target = (value?.href || '').startsWith('http') ? '_blank' : undefined
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === '_blank' ? 'noreferrer' : undefined}
          className="underline transition-colors hover:text-emerald-500"
        >
          {children}
        </a>
      )
    },
  },
  list: {
    bullet({ children }) {
      return (
        <ul className="flex list-inside list-disc flex-col gap-1 pl-2">{children}</ul>
      )
    },
  },
}

export function ProjectDetails({ data }: ProjectDetailsProps) {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-4 pb-10 pt-24 sm:min-h-[750px] sm:pb-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `url(/images/hero-bg.png) no-repeat center/cover, url(${urlFor(
            data.thumbnail,
          )
            .width(700)
            .height(500)
            .url()}) no-repeat center/cover`,
        }}
      />
      <SectionTitle
        title={data.name}
        subtitle="Projetos"
        className="items-center text-center [&>h2]:text-4xl"
      />
      <PortableText value={data.description} components={myPortableTextComponents} />
      <ul className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        {data.technologies.map((technology) => (
          <Badge key={technology._id} asChild>
            <li>{technology.name}</li>
          </Badge>
        ))}
      </ul>
      <div className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        <Button asChild className="min-w-[180px] gap-2 shadow-button hover:scale-105">
          <a href={data.github_url} target="_blank" rel="noreferrer">
            <TbBrandGithub size={20} />
            Repositório
          </a>
        </Button>
        <Button asChild className="min-w-[180px] gap-2 shadow-button hover:scale-105">
          <a href={data.live_project_url} target="_blank" rel="noreferrer">
            <FiGlobe size={20} />
            Projeto online
          </a>
        </Button>
      </div>
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
