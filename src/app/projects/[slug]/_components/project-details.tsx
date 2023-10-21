import { SectionTitle } from '@/components/section-title'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TbBrandGithub } from 'react-icons/tb'
import { FiGlobe } from 'react-icons/fi'
import Link from 'next/link'
import { HiArrowNarrowLeft } from 'react-icons/hi'

export function ProjectDetails() {
  return (
    <section className="relative flex w-full flex-col items-center justify-end overflow-hidden px-4 pb-10 pt-24 sm:min-h-[750px] sm:pb-24">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'url(/images/hero-bg.png) no-repeat center/cover, url(https://fakeimg.pl/1000x1000/333333/c2c2c2) no-repeat center/cover',
        }}
      />
      <SectionTitle
        title="Title of project"
        subtitle="Projetos"
        className="items-center text-center [&>h2]:text-4xl"
      />
      <p className="my-4 max-w-[640px] text-center text-sm text-gray-400 sm:my-6 sm:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A sapiente, expedita
        saepe et nobis minima labore possimus laborum quasi quas.
      </p>
      <ul className="flex w-full max-w-[330px] flex-wrap items-center justify-center gap-2">
        <Badge asChild>
          <li>NextJS</li>
        </Badge>
        <Badge asChild>
          <li>TailwindCSS</li>
        </Badge>
        <Badge asChild>
          <li>NodeJS</li>
        </Badge>
        <Badge asChild>
          <li>Prisma</li>
        </Badge>
        <Badge asChild>
          <li>MySQL</li>
        </Badge>
        <Badge asChild>
          <li>Radix UI</li>
        </Badge>
      </ul>
      <div className="my-6 flex flex-col items-center gap-2 sm:my-12 sm:flex-row sm:gap-4">
        <Button asChild className="min-w-[180px] gap-2 shadow-button hover:scale-105">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <TbBrandGithub size={20} />
            Repositório
          </a>
        </Button>
        <Button asChild className="min-w-[180px] gap-2 shadow-button hover:scale-105">
          <a href="https://github.com/" target="_blank" rel="noreferrer">
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
