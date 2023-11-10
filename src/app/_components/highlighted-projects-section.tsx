import { HorizontalDivider, horizontalDividerStyle } from '@/components/dividers'
import { SectionTitle } from '@/components/section-title'
import { HighlightedProjectsItem } from './highlighted-projects-item'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { HighlightProject } from '@/types/hygraph/page-info'

interface HighlightedProjectsSectionProps {
  data: HighlightProject[]
}

export function HighlightedProjectsSection({ data }: HighlightedProjectsSectionProps) {
  return (
    <section className="container px-4 py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />
      <HorizontalDivider className="mb-16" />

      <ul>
        {data.map((project) => (
          <li key={project.id} className={cn(horizontalDividerStyle, 'pb-8')}>
            <HighlightedProjectsItem {...project} />
          </li>
        ))}
      </ul>
      <p className="flex items-center gap-1.5">
        <span className="text-gray-400">Se interessou?</span>
        <Link
          href="/projects"
          className="flex items-center gap-2 transition-colors hover:text-emerald-500"
        >
          Ver todos
          <HiArrowNarrowRight aria-hidden />
        </Link>
      </p>
    </section>
  )
}
